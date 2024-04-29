import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import Autocomplete from '@mui/material/Autocomplete';
import "./Navbar.css"
import Dialog from '@mui/material/Dialog';
import LoginForm from "./LoginForm";
import Banner from '../assets/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useHistory } from "react-router-dom";

const pages = [
    {  id: 1,name: 'News', url: '/news' }, 
    {  id: 2,name: 'Videos', url: '/Videos' }
];
// const settings = ['MyProfile', 'Order', 'Whislit', 'Coupons', 'Gift Cards', 'Logout', 'Notification'];

const settings = [
    {
        id: 1,
        name: "My Profile",
        link: "/myprofile"
    },
    {
        id: 2,
        name: "Your Orders",
        link: "/yourorders"
    },
    {
        id: 3,
        name: "Whislit",
        link: "/whislit"
    },
    {
        id: 4,
        name: "Coupons",
        link: "/coupons"
    },
    {
        id: 5,
        name: "Gift Cards",
        link: "/giftcards"
    },
    {
        id: 6,
        name: "Logout",

    },
    // {
    //     id: 7,
    //     name: "Notification",
    //     link: "/notification"
    // },
]
function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    // const [isLoginned, setisLoginned] = React.useState(true);

    const token = localStorage.getItem('access_token');
    const isLoginned = !!token;
    // const navigate = useNavigate();
    // const navigate = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('access_token'); // Remove token from local storage
        // history.push('/login'); // Redirect the user to the login page after logout
        handleCloseUserMenu(); // Close the menu after logout
    };
    const handleOpen = () => {
        // localStorage.removeItem('access_token'); // Remove token from local storage
        // navigate("/UserProfile");
        // handleCloseUserMenu(); // Close the menu after logout
    };

    const top100Films = [
        { title: 'iPhone 13' },
        { title: 'Samsung Galaxy S21' },
        { title: 'Google Pixel 6' },
        { title: 'MacBook Pro' },
        { title: 'Dell XPS 13' },
        { title: 'HP Spectre x360' },
        { title: 'Sony Bravia X90J' },
        { title: 'LG C1 OLED TV' },
        { title: 'Samsung QN90A Neo QLED TV' },
        { title: 'Apple Watch Series 7' },
        { title: 'Samsung Galaxy Watch 4' },
        { title: 'Fitbit Sense' },
        { title: 'AirPods Pro' },
        { title: 'Sony WF-1000XM4' },
        { title: 'Samsung Galaxy Buds Pro' },
        { title: 'Bose QuietComfort Earbuds' },
        { title: 'Jabra Elite 85t' },
        { title: 'Beats Studio Buds' },
        { title: 'Xiaomi Redmi Note 10' },
        { title: 'Lenovo Legion 5' },
        { title: 'ASUS ROG Zephyrus G14' },
        { title: 'LG OLED C1' },
        { title: 'TCL 6-Series' },
        { title: 'Garmin Fenix 7' },
        { title: 'Polar Vantage V2' },
        { title: 'Huawei Watch GT 3' },
        { title: 'Google Pixel Buds A-Series' },
        { title: 'Anker Soundcore Liberty Air 2 Pro' },
        { title: 'Skullcandy Indy ANC' },
        { title: 'Sennheiser Momentum True Wireless 2' },
        { title: 'Apple iPad Pro' },
        { title: 'Samsung Galaxy Tab S7' },
        { title: 'Microsoft Surface Pro 7' },
        { title: 'Amazon Fire HD 10' },
        { title: 'Google Nest Hub Max' },
        { title: 'Sony A80J OLED' },
        { title: 'Vizio OLED 4K HDR Smart TV' },
        { title: 'Apple AirPods Max' },
        { title: 'Sony WH-1000XM4' },
        { title: 'Bose Noise Cancelling Headphones 700' },
        { title: 'JBL Flip 5' },
        { title: 'UE Boom 3' },
        { title: 'NVIDIA GeForce RTX 3080' },
        { title: 'AMD Ryzen 9 5900X' },
        { title: 'PlayStation 5' },
        { title: 'Xbox Series X' },
        { title: 'Nintendo Switch' },
        { title: 'Razer BlackWidow V3' },
        { title: 'Logitech G Pro X' },
        { title: 'Corsair K95 RGB Platinum XT' },
        { title: 'SteelSeries Apex Pro' },
        { title: 'GoPro Hero 9 Black' },
        { title: 'DJI Mini 2' },
        { title: 'Canon EOS R5' },
        { title: 'Sony A7S III' },
        { title: 'Fujifilm X-T4' },
        { title: 'Nikon Z6 II' },
        { title: 'Panasonic Lumix GH5' },
        { title: 'GoPro Max' },
        { title: 'Insta360 One X2' },
        { title: 'Roku Ultra' },
        { title: 'Amazon Echo Show 10' },
        { title: 'Google Nest Audio' },
        { title: 'Sonos Arc' },
        { title: 'Bose SoundLink Revolve' },
        { title: 'JBL Charge 4' },
        { title: 'Anker Soundcore Motion+' },
        { title: 'UE Wonderboom 2' },
        { title: 'Logitech MX Master 3' },
        { title: 'Apple Magic Keyboard' },
        { title: 'Microsoft Surface Ergonomic Keyboard' },
        { title: 'Razer Huntsman Elite' },
        { title: 'Corsair K70 RGB MK.2' },
        { title: 'SteelSeries Apex 7' },
        { title: 'Logitech G502 Hero' },
    ];
    return (
        <AppBar position="static" sx={{ background: 'none', color: 'black' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }} >


                    <img
                        className="d-block "
                        src={Banner}
                        alt="First slide"
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "3%" }}  >

                        {pages.map((page) => (
                            <Button href={page.url}

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Stack spacing={1} sx={{ width: 500 }} direction="row" alignItems="center" gap={3}>

                        <Autocomplete
                            fullWidth
                            freeSolo
                            size='small'
                            id="free-solo-2-demo"
                            disableClearable

                            sx={{ marginRight: '10px', display: { xs: "none", md: "block" } }}
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField

                                    {...params}
                                    label="Search Products"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                        {isLoginned ? (
                            <ShoppingCartOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} />) : (null)}
                        {isLoginned ? (
                            <NotificationsActiveOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} />) : (null)}
                        {/* <SearchOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} /> */}
                        {/* <Stack direction="row">
                            <div>
                                {isLoginned ? (
                                    <Typography >My Account</Typography>
                                ) : (
                                    <Button variant="contained" onClick={handleClickOpen}>
                                        Login
                                    </Button>
                                )}

                            </div>

                        </Stack> */}

                        <Dialog
                            open={open}
                            onClose={handleClose}>

                            <DialogContent>
                                <LoginForm />
                            </DialogContent>
                        </Dialog>

                        <Box sx={{ flexGrow: 0 }}>

                            {isLoginned ? (
                                <><Tooltip title="Open settings" >
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}   >


                                        <Avatar alt="Gemy Sharp" src="/static/images/avatar/2.jpg" sx={{ margin: 2 }} />
                                    </IconButton>
                                </Tooltip>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </MenuItem>
                                        ))} */}

                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/profile'>My Profile</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/yourorders'>Your Orders</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/whislit'>Wishlist</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/coupons'>Coupons</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/giftcards'>Gift Cards</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>
                                            <Button>Logout</Button>
                                            {/* <Typography textAlign="center"></Typography> */}
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        {/* <MenuItem onClick={handleOpen}>  
                                            <Button href='/notification'>Notification</Button>
                                            <LogoutIcon sx={{ ml: 1 }} />
                                        </MenuItem> */}
                                    </Menu></>
                            ) : (
                                <Button variant="contained" onClick={handleClickOpen}>
                                    SignUp/Login
                                </Button>
                            )}

                        </Box>

                    </Stack>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={{ color: 'black', fontWeight: '600' }}>
                                    <Typography textAlign="center"  >{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
                <Toolbar sx={{ display: { xs: "block", md: "none" } }}>
                    <Autocomplete
                        fullWidth
                        freeSolo
                        size='small'
                        id="free-solo-2-demo"
                        disableClearable
                        sx={{ marginRight: '10px' }}
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField

                                {...params}
                                label="Search Products"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;