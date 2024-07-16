import React from "react";
import SideMenu from "../Components/SideMenu";
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import "../Components/Mainlayout.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from ".././theme";
const AdminLayout = ({ children }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = React.useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="App" style={{ overflowX: "hidden" }}>
      <div className="SideMenuAndPageContent " style={{background:"#141b2d"}}>
        <SideMenu isSidebar={isSidebar} />
        <div className="admin-content" style={{ margin: "40px" }}>
          {" "}
          <AppHeader setIsSidebar={setIsSidebar}/>
          {children}
        </div>
      </div>
      {/* <AppFooter /> */}
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminLayout;
