import React, { useEffect, useState } from "react";
import { getApp } from "firebase/app";
import { collection, getFirestore, query } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const User = () => {
  return (
    <div className="w-2/5 h-28 bg-slate-200 m-auto mt-36">
      <label className="px-4">Amount of Bio waste</label>
      <input type="number" placeholder="Sac amount" />
      <br />
      <label className="px-4">Amount of Plastic waste</label>
      <input type="number" />
      <br />
      <label className="px-4">Amount of Electronics waste</label>
      <input type="number" />
      <br />
      <span></span>
      <button className="text-center">Pick Up</button>
    </div>
  );
};

export default User;
