import { getApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import React from "react";
import { Helmet } from "react-helmet-async";

interface ItemProps {
  count: number;
  name: string;
  threshold: number;
}

const Item: React.FC<ItemProps> = ({ count, name, threshold }) => {
  return (
    <div className="m-2 p-2 bg-slate-300 flex flex-row items-center rounded">
      <span className="text-lg pl-2 font-bold">{count}</span>
      <span className="pl-4">{name}</span>
      {count > threshold ? (
        <button className="bg-slate-800 text-white px-3 py-1 rounded-md space-x-4 ml-auto">
          assign
        </button>
      ) : (
        <span className="ml-auto space-x-4 px-3 italic">below threshold</span>
      )}
    </div>
  );
};

interface Wards {
  name: string;
  number: number;
  currentRequests: number;
}

interface Stats {
  amountBio: number;
  amountElectric: number;
  amountPlastic: number;
  missedPickups: number;
  totalRequests: number;
}

const Home = () => {
  const app = getApp();
  const db = getFirestore(app);
  const [wards, setWards] = useState<Wards[] | null>(null);
  const [threshold, setThreshold] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const getWards = async () => {
      const colRef = collection(db, "wards");
      const q = query(colRef);
      getDocs(q)
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data() as Wards);
          setWards(data);
        })
        .catch((error) => {
          console.error("Error retrieving data:", error);
        });
    };
    const getStats = async () => {
      const docRef = doc(db, "stats", "stats");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const stats = docSnap.data() as Stats;
        setStats(stats);
      } else {
        console.log("no stat doc!");
      }
    };
    getWards();
    getStats();
  }, [setWards, db]);

  return (
    <div className="grid grid-cols-3 h-[90vh]">
      <Helmet>
        <title>GreenBin - Home</title>
      </Helmet>
      <div className="col-span-2 m-auto">
        <h1 className="text-3xl pb-4">Stats</h1>
        <p>Number of collection requests: {stats?.totalRequests}</p>
        <p>Amount of Bio: {stats?.amountBio}</p>
        <p>Amount of Plastic: {stats?.amountPlastic}</p>
        <p>Amount of Eletronic: {stats?.amountElectric}</p>
        <p>Missed pickups: {stats?.missedPickups}</p>H
      </div>
      <div className="h-full overflow-y-scroll w-full bg-slate-200">
        <h3 className="px-6 py-2 bg-slate-400">threshold reached</h3>
        {wards?.map((ward) =>
          ward.currentRequests > threshold ? (
            <Item count={ward.currentRequests} name={ward.name} threshold={threshold} />
          ) : null
        )}
        {!wards?.some((ward) => ward.currentRequests > threshold) && (
          <span className="px-3 my-10">no above threshold wards</span>
        )}
        <h3 className="px-6 py-2 bg-slate-400">threshold not reached</h3>
        {wards?.map((ward) =>
          ward.currentRequests < threshold ? (
            <Item count={ward.currentRequests} name={ward.name} threshold={threshold} />
          ) : null
        )}
        {!wards?.some((ward) => ward.currentRequests < threshold) && (
          <span className="px-3 my-10">no below threshold wards</span>
        )}
      </div>
    </div>
  );
};

export default Home;
