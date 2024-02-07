import { getApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

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

interface Ward {
  currentRequests: number;
  name: string;
  number: number;
}

interface User {
  aadhar: number;
  address: string;
  location: string;
  phone: string;
  ward: Ward;
}

interface Request {
  assignedProvider: Provider;
  bioAmount: number;
  electricAmount: number;
  plasticAmount: number;
  pickUpTime: string;
  requestUser: User;
  status: string;
  wardName: string;
}

const Request: React.FC<Request> = (request) => {
  return <div className=""></div>;
};

const Provider = () => {
  const app = getApp();
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [loggedInCollectorEmail, setLoggedInCollectorEmail] = useState<string | null>(null);
  const [requests, setRequests] = useState<Request[] | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInCollectorEmail(user.email);
      }
    });
    const colRef = collection(db, "requests");
    const q = query(
      colRef,
      where("assignedProvider.collectors", "array-contains", { email: loggedInCollectorEmail })
    );
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data() as Request);
        setRequests(data);
      })
      .catch((error) => {
        console.error("error retrieving data:", error);
      });
  });

  return (
    <>
      <div>
        <div>
          <span>Location</span>
          <span>WardNO</span>
          <span>Address</span>
          <span>Name</span>
          <span>Phone No</span>
        </div>
      </div>
    </>
  );
};

export default Provider;
