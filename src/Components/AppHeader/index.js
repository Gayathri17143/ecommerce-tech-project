import { BellFilled, MailOutlined, MenuOutlined,LogoutOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Button } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import SideMenu from "../../Components/SideMenu"; // Import your SideMenu component
import logo from "../../assets/logos.png";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear any stored authentication tokens or user data
    localStorage.removeItem('authToken');
    // Redirect to login page
    // navigate.push('/');
    handleCloseUserMenu(); 
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div
      className="AppHeader"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom:"none",
        // background:"#141b2d",
      }}
    >
      <div style={{ display: "flex", alignItems: "center"  }}>
        {/* <Button
          icon={<MenuOutlined />}
          onClick={() => setMenuOpen(true)}
          style={{
            marginRight: "16px",
            background: "none",
            color: "#000",
            boxShadow: "none",
          }}
          className="burger-menu"
        /> */}
        {/* <Image width={40} src={logo} style={{ marginRight: "16px" }} />
        <Typography.Title
          style={{ fontSize: 25, margin: 0, textAlign: "center" }}
        >
          Admin Dashboard
        </Typography.Title> */}
      </div>
      <Box display="flex" justifyContent="space-between" p={2} gap={'20px'}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">    
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon  style={{ color:"#e0e0e0" }}/>
          )}
        </IconButton>
        <IconButton count={comments.length} dot >
          <MailOutlineIcon  style={{ color:"#e0e0e0" }}
            onClick={() => {
              setCommentsOpen(true);
            }}/>
            
        </IconButton>
        <IconButton count={orders.length}>
          <NotificationsOutlinedIcon  style={{ color:"#e0e0e0" }}
            onClick={() => {
              setNotificationsOpen(true);
            }}/>
        </IconButton>
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton>
          <PersonOutlinedIcon   style={{ color:"#e0e0e0" }}/>
        </IconButton>
        <IconButton>
          <ExitToAppIcon  style={{ color:"#e0e0e0" }}/>
        </IconButton>
      </Box>
    </Box>
      {/* <Space style={{ gap:"20px"}}>
        <Badge count={comments.length} dot  >
          <MailOutlined  
            style={{ fontSize: 24 ,color:"#575757" }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled 
            style={{ fontSize: 24,color:"#575757" }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
        <Badge>
          <LogoutOutlined onClick={handleLogout} style={{ fontSize: 24,color:"#575757" }}/>
        </Badge>
      </Space> */}
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement="left"
      >
        <SideMenu />
      </Drawer>
    </div>
  );
}

export default AppHeader;
