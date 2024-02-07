import { getApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface Collector {
  email: string;
  name: string;
  phone: string;
}

interface Provider {
  name: string;
  serviceAreas: string[];
  collectors: Collector[];
}

const ProviderItem: React.FC<Provider> = (provider) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" w-10/12 bg-slate-400 p-3 rounded mb-4 mx-auto">
      <div className="flex flex-row items-center py-1 px-2">
        <span className="text-xl font-bold">{provider.name}</span>
        <div className="ml-auto space-x-4">
          {provider.serviceAreas.map((area) => (
            <span className=" bg-slate-600 text-white py-1 px-5 rounded-full">{area}</span>
          ))}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xl font-bold rounded-full bg-slate-500 text-white px-2"
          >
            {isExpanded ? ">" : "˅"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <ul className="pt-2 px-3">
          {provider.collectors.map((collector) => (
            <li key={collector.email}>
              {collector.name} - {collector.email} - {collector.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Providers = () => {
  const app = getApp();
  const db = getFirestore(app);
  const [providers, setProviders] = useState<Provider[] | null>(null);

  useEffect(() => {
    const getProviders = async () => {
      const colRef = collection(db, "providers");
      const q = query(colRef);
      getDocs(q)
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data() as Provider);
          setProviders(data);
        })
        .catch((error) => {
          console.error("error retrieving data:", error);
        });
    };
    getProviders();
  });

  return (
    <div className=" w-3/5 h-[80vh] bg-slate-200 m-auto p-3">
      <Helmet>
        <title>GreenBin - Providers</title>
      </Helmet>
      <div className="flex flex-row items-center">
        <span className="text-4xl m-5">Providers</span>
        <button className="bg-slate-800 text-white ml-auto space-x-4 py-2 px-3 rounded-md h-fit mr-4">
          Add Provider
        </button>
      </div>
      <div>
        {providers?.map((provider) => (
          <ProviderItem key={provider.name} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default Providers;
