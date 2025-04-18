import React from "react";
import Cards from "./Cards";
import Transaction from "./Transaction";
import Activity from "./Activity";
import Statistics from "./Statistics";
import Transfer from "./Transfer";
import Balance from "./Balance";

function Dashboard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          width: "100%",
        }}
      >
        <div className="w-[100%] bg-[#f6f7fb] block  sm:mb-0 h-[75vh] sm:h-[80vh] sm:flex pb-24">
          <Cards />
          <Transaction />
        </div>
        <div className="w-[100%]  bg-[#f6f7fb] block sm:flex sm:mt-[-200px]">
          <Activity />
          <Statistics />
        </div>
        <div className="w-[100%] bg-[#f6f7fb] block sm:flex pb-16">
          <Transfer />
          <Balance />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
