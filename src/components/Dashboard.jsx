import Navbar from "./Navbar";
import GetLessons from "./GetLessons";
import "../css/dashboard.css";

import { useState, useEffect } from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar showLogin="showMain" />
      <div className="schedule-container">
        <div className="main">
          <GetLessons />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
