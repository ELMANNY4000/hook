import React, { useEffect, useState } from "react";

const Effects = () => {
  const [BankData, setBankData] = useState([]);

  const fetchbankData = () => {
    fetch("https://nigerianbanks.xyz/") // fetch Data
      .then((response) => response.json()) // coveting response to JSON
      .then((data) => setBankData(data)) // updating  data
      .catch((error) => console.log(error)); // catching error
  };

  useEffect(() => {
    fetchbankData();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center">
      {
      BankData.map((bd,index) => (
        
        <div key={index} class="card" style={{ width: "15rem" }}>
          <img src={bd.logo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{bd.name}</h5>
            <p class="card-text">
            {bd.code}
            </p>
            <a href="#" class="btn btn-primary w-100">
              Go somewhere
            </a>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Effects;
