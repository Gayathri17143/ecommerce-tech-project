import React from "react";
import SideMenu from "../Components/SideMenu";
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import "../Components/Mainlayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <div className="admin-content" style={{margin:"40px"}}>{children}</div>
       
      </div>
      {/* <AppFooter /> */}
    </div>
  );
};

export default AdminLayout;
