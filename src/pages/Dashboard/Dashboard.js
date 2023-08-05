import React from "react";
import DashboardSiddebar from "../../components/DashboardSiddebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
  
      
      <DashboardSiddebar>
        <h1>Clean co</h1>
      
        <Outlet />
      </DashboardSiddebar>
   
  );
};

export default Dashboard;
