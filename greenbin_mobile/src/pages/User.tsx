// import React from "react";

// const User = () => {


//   return <div><h4>Name</h4>
//   <h5>Phone Number</h5> </div>;
//   <div>
//     <label>Amount of Bio waste</label><input type="number" placeholder="Sac amount"  /><br />
//     <label>Amount of Plastic waste</label><input type="number" /><br />
//     <label>Amount of Electronics waste</label><input type="number" /><br />
//     <span></span>
//     <button>Pick Up</button>
//   </div>
// };

// export default User;



import React, { useState } from 'react';

const bioWastePrice = 50;
const electronicWastePrice = 70;
const plasticWastePrice = 50;

const User = () => {
  const [sacAmount, setSacAmount] = useState(0);
  const [bioWasteAmount, setBioWasteAmount] = useState(0);
  const [electronicWasteAmount, setElectronicWasteAmount] = useState(0);
  const [plasticWasteAmount, setPlasticWasteAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Input validation with error messages (optional)
  const validateInput = (value: number) => {
    if (isNaN(value) || value < 0) {
      console.error('Invalid input: Please enter a non-negative number.');
      return false; // Indicate invalid input to handle it appropriately
    }
    return true; // Indicate valid input
  };

  // Event handlers for each waste type:
  const handleSacAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSacAmount = parseInt(event.target.value, 10);

    if (!validateInput(newSacAmount)) {
      return; // Handle invalid input (e.g., display error message)
    }

    setSacAmount(newSacAmount);
    calculateTotalPrice();
  };

  const handleBioWasteAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBioWasteAmount = parseInt(event.target.value, 10);

    if (!validateInput(newBioWasteAmount)) {
      return; // Handle invalid input
    }

    setBioWasteAmount(newBioWasteAmount);
    
    calculateTotalPrice();
  };

  const handleElectronicWasteAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newElectronicWasteAmount = parseInt(event.target.value, 10);
  
    if (!validateInput(newElectronicWasteAmount)) {
      return; // Handle invalid input (e.g., display error message)
    }
  
    setElectronicWasteAmount(newElectronicWasteAmount);
    calculateTotalPrice();
  };
  
  const handlePlasticWasteAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlasticWasteAmount = parseInt(event.target.value, 10);
  
    if (!validateInput(newPlasticWasteAmount)) {
      return; // Handle invalid input (e.g., display error message)
    }
  
    setPlasticWasteAmount(newPlasticWasteAmount);
    calculateTotalPrice();
  };
  

  // Similar handlers for electronicWasteAmount and plasticWasteAmount

  const calculateTotalPrice = () => {
    const newTotalPrice =
      sacAmount * bioWastePrice +
      electronicWasteAmount * electronicWastePrice +
      plasticWasteAmount * plasticWastePrice;
    setTotalPrice(newTotalPrice);
  };

  return (
    <div>
      <h4>Name</h4>
      <h5>Phone Number</h5>
      <div>
        <label>Amount of Bio waste</label>
        <input
          type="number"
          placeholder="Sac amount"
          value={bioWasteAmount}
          onChange={handleBioWasteAmountChange}
        />
        <br />
        <label>Amount of Plastic waste</label>
        <input
          type="number"
          placeholder="Plastic amount"
          value={plasticWasteAmount}
          onChange={handlePlasticWasteAmountChange}
        />
        <br />
        <label>Amount of Electronics waste</label>
        <input
          type="number"
          placeholder="Electronics amount"
          value={electronicWasteAmount}
          onChange={handleElectronicWasteAmountChange}
        />
        <br />
        <span>Total Price: {totalPrice} INR</span>
      </div>
      <button>Pick Up</button>
    </div>
  );
};

export default User;
