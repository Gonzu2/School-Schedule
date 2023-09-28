import Navbar from "./Navbar";

import { useState, useEffect } from "react";

function Dashboard() {
    return (
        <div>
            <Navbar showLogin="showMain"/>
            <div>Dashboard</div>
        </div>
    )
}

export default Dashboard;