import React from "react";
import './Navigationbar.css'
import {
    Navbar,
    Nav,
    NavDropdown,
} from "react-bootstrap";
const navBarData = [

    {
        label: "Mobiles",

        submenu: [

            {
                label: "IPhones",
                url: "/iphones",
            },
            {
                label: "Smart Phones",
                url: "/smartphones",
            },
            {
                label: "Basic Phones",
                url: "/basicphones",
            },
            {
                label: "Accessories",
                url: "/Accessories",
                submenu: [
                    {
                        label: "Chargers",
                        url: "/Accessories/chargers",
                    },
                    {
                        label: "Adapters",
                        url: "/Accessories/adapters",
                    },
                    {
                        label: "Cables & Connectors",
                        url: "/Accessories/Cables&Connectors",
                    },
                    {
                        label: "Powerbanks",
                        url: "/powerbanks",
                    },
                    {
                        label: "Wired",
                        url: "/wired",
                    },
         
                    {
                        label: "Wireless",
                        url: "/Wireless",
                        // submenu: [
                        //     {
                        //         label: "Bluetooth Headsets",
                        //         url: "/Wireless/Bluetooth Headsets",
                        //     },
                        //     {
                        //         label: "Boom HeadPhones",
                        //         url: "/Wireless/Boom HeadPhones",
                        //     },
                        // ],
                    },
                    {
                        label: "True Wireless",
                        url: "/True Wireless",
                        submenu: [
                            {
                                label: "Earbuds",
                                url: "/TrueWireless/Earbuds",
                            },
        
                        ],
                    },
                ],
            },
           
            {
                label: "Cameras",
                url: "/Cameras",
                submenu: [
                    {
                        label: "WebCamera",
                        url: "/Cameras/WebCamera",
                    },

                ],
            },

        ],
    },
    {
        label: "Laptop & Tablets",
        submenu: [
            {
                label: "Macbook Laptop",
                url: "/macbook laptop",
                submenu: [
                    {
                        label: "Mackbook Air",
                        url: "/macbooklaptop/mackbookair",
                    },
                    {
                        label: "Mackbook Pro",
                        url: "/macbooklaptop/mackbookpro",
                    },
                ],
            },

            {
                label: "2 in 1 Laptop",
                url: "/2in1laptop",
            },
            {
                label: "Gaming Laptop",
                url: "/gaminglaptop",
            },
            {
                label: "Windows Laptop",
                url: "/windowslaptop",
            },
            {
                label: "Tab & IPad",
                url: "/tab&ipad",
                submenu: [
                    {
                        label: "IPad",
                        url: "/tab&ipad/IPad",
                    },
                    {
                        label: "Tab",
                        url: "/tab&ipad/Tab",
                    },
                ],
            },
        ],

    },
    {
        label: "Television",
        submenu: [

            {
                label: "4K Ultra HD TVS",
                url: "/smarttvs",
            },
            {
                label: "Full HD TVS",
                url: "/fullhdtvs",
            },
            {
                label: " HD TVS",
                url: "/hdtvs",
            },
            {
                label: "QLED TVS",
                url: "/qledtvs",
            },
            {
                label: "OLED TVS",
                url: "/oledtvs",
            },
            {
                label: "Smart Tvs",
                url: "/smarttvs",
            },
            {
                label: "AndroidTvs",
                url: "/AndroidTvs",
            },
        ],
    },
    {
        label: "SmartWatch",
        submenu: [

            
            {
                label: "FitnessTracker",
                url: "/FitnessTracker",
            },
           
            {
                label: "Chargers",
                url: "/chargers",
            },
            {
                label: "Straps",
                url: "/straps",
            },
            {
                label: "Cables",
                url: "/cables",
            },

        ],
    },
    {
        label: "Speaker",
        submenu: [

            {
                label: "Bluetooth Speakers",
                url: "/bluetoothspeakers",
            },
            {
                label: "Party Speakers",
                url: "/partyspeakers",
            },
            {
                label: "Portable Speakers",
                url: "/portablespeakers",
            },
            {
                label: "Smart Speakers",
                url: "/smartspeakers",
            },
            {
                label: "SoundBars",
                url: "/SoundBars",
            },

        ],
    },
   


];

function App() {
    const menuShow = (mItems) => {
        return mItems.map(
            (item, index) => {
                if (item.submenu) {
                    return (
                        <NavDropdown
                            title={
                                item.label
                            }
                            key={index}
                            className="dropdown-menu-dark 
									dropend">
                            {menuShow(
                                item.submenu
                            )}
                        </NavDropdown>
                    );
                } else {
                    return (
                        <Nav.Link
                            href={
                                item.url
                            }
                            key={index}>
                            {item.label}
                        </Nav.Link>
                    );
                }
            }
        );
    };
    const navStyle = {
        color: "black",
        fontWeight: "bold"

    };
    return (
        <Navbar
            
            expand="lg"
            variant="light">
            <Navbar.Brand href="#home">
                <h1
                    style={{
                        color: "#5b5f97!important",
                    }}>

                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav
                    className="mr-auto"
                    style={navStyle}>
                    {menuShow(
                        navBarData
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default App;

