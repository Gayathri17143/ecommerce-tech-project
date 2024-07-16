import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TagOutlined,
  SettingOutlined,
  TeamOutlined,
  GlobalOutlined,
  BarChartOutlined,
  TransactionOutlined,
  PrinterOutlined,
  LogoutOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import logo from "../../assets/user.png";
import { tokens } from "../../theme";

import { Box, IconButton, Typography, useTheme, Link } from "@mui/material";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideMenu.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [search, setSearch] = useState("");
  const [openKeys, setOpenKeys] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleFilterChange = () => {
    // Handle filter logic here if necessary
  };

  useEffect(() => {
    handleFilterChange();
  }, [search]);

  const menuItems = [
    {
      label: "Dashboard",
      icon: <AppstoreOutlined style={{ color: '#b3adb3', fontSize: '24px',background :"none!important" }} />,
      key: "/dashboard",
    },
    {
      label: "Products",
      key: "products",
      icon: <InboxOutlined style={{ color: '#b3adb3', fontSize: '24px' }} />,
      children: [
        { label: "Product List", key: "/product-list" },
        { label: "Categories", key: "/category-list" },
        { label: "Brands", key: "/brands" },
        { label: "Reviews", key: "/reviews" },
      ],
    },
    {
      label: "Orders",
      key: "/orders",
      icon: <ShoppingCartOutlined style={{ color: '#b3adb3', fontSize: '24px' }} />,
      // children: [
      //   { label: "All orders", key: "/orders"  },
      //   { label: "Pending orders", key: "/pending-orders" },
      //   { label: "Completed orders", key: "/completed-orders" },
      //   { label: "Cancelled orders", key: "/cancelled-orders" },
      //   { label: "Returns", key: "/returns" },
      // ],
    },
    {
      label: "Customers",
      key: "customers",
      icon: <TeamOutlined style={{ color: '#b3adb3', fontSize: '24px' }} />,
      children: [
        { label: "Customer List", key: "/customers" },
        { label: "Customer Groups", key: "/customer-groups" },
        { label: "Reviews", key: "/customer-reviews" },
      ],
    },
    {
      label: "Inventory",
      key: "/inventory",
      icon: <ShopOutlined style={{ color: '#b3adb3', fontSize: '24px' }} />,
      // children: [
      //   { label: "Stock Management", key: "/inventory" },
      //   { label: "Low Stock Alerts", key: "/low-stock-alerts" },
      // ],
    },
    {
      label: "Users",
      key: "/user-list",
      icon: <UserOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
    },
    {
      label: "Statistics",
      key: "statistics",
      icon: <BarChartOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
      children: [
        { label: "Sales Reports", key: "/sales-reports" },
        { label: "Customer Reports", key: "/customer-reports" },
        { label: "Product Reports", key: "/product-reports" },
      ],
    },
    {
      label: "Transactions",
      key: "/transactions",
      icon: <TransactionOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
    },
    {
      label: "Invoice",
      key: "/invoice",
      icon: <PrinterOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
    },
    // {
    //   label: "Sellers",
    //   key: "/sellers",
    //   icon: <GlobalOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
    // },
    // {
    //   label: "Hot Offers",
    //   key: "/offers",
    //   icon: <TagOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/>,
    // },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined style={{ color: '#b3adb3', fontSize: '24px' }}/> ,
      children: [
        { label: "General Settings", key: "/Settings" },
        { label: "Payment Methods", key: "/payment-methods" },
        { label: "Shipping Methods", key: "/shipping-methods" },
        { label: "Tax Settings", key: "/tax-settings" },
      ],
    },

  ];

  return (
    // <div className="SideMenu" style={{ width: 250 }}>
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={logo}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color={colors.grey[100]}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Rosey
                </Typography>
                <Typography color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            
        <Menu iconShape="circle"  >
          {menuItems.map((item) =>
            item.children ? (
              <SubMenu key={item.key} title={<span className="menu-label">{item.label}</span>} icon={item.icon}>
                {item.children.map((child) => (
                  <MenuItem key={child.key} onClick={() => navigate(child.key)}  className="menu-label">
                    {child.label}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={item.key}
                icon={item.icon}  
                  className="menu-label"
                onClick={() => navigate(item.key)}
              >
                {item.label}
              </MenuItem>
            )
          )}
        </Menu>
        </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default SideMenu;
