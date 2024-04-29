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
                        url: "/Accessories/Chargers",
                    },
                    {
                        label: "Adapters",
                        url: "/Accessories/Adapters",
                    },
                    {
                        label: "Cables & Connectors",
                        url: "/Accessories/Cables & Connectors",
                    },
                ],
            },
            {
                label: "Powerbanks",
                url: "/Powerbanks",
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
                        url: "/macbook-laptop/mackbook-air",
                    },
                    {
                        label: "Mackbook Pro",
                        url: "/macbook-laptop/mackbook-pro",
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
                url: "/HD TVS",
            },
            {
                label: "Full HD TVS",
                url: "/HD TVS",
            },
            {
                label: " HD TVS",
                url: "/HD TVS",
            },
            {
                label: "QLED TVS",
                url: "/QLED TVS",
            },
            {
                label: "OLED TVS",
                url: "/OLED TVS",
            },
            {
                label: "Smart Tvs",
                url: "/Smart Tvs",
            },
            {
                label: "Android Tvs",
                url: "/Android Tvs",
            },
        ],
    },
    {
        label: "SmartWatch",
        submenu: [

            {
                label: "Wearables",
                url: "/Wearables",
            },
            {
                label: "Fitness Tracker",
                url: "/Fitness Tracker",
            },
            {
                label: "Smart Glasses",
                url: "/Smart Glasses",
            },
            {
                label: "Smart Watches",
                url: "/Smart Watches",
            },

        ],
    },
    {
        label: "Speaker",
        submenu: [

            {
                label: "Bluetooth Speakers",
                url: "/Bluetooth Speakers",
            },
            {
                label: "Music Player",
                url: "/Music Player",
            },
            {
                label: "Party Speakers",
                url: "/Party Speakers",
            },
            {
                label: "Portable Speakers",
                url: "/Portable Speakers",
            },
            {
                label: "Smart Speakers",
                url: "/Smart Speakers",
            },
            {
                label: "Sound Bars",
                url: "/Sound Bars",
            },

        ],
    },
    {
        label: "HeadPhones & Headsets",

        submenu: [

            {
                label: "Wired",
                url: "/Wired",
            },


            {
                label: "Wireless",
                url: "/Wireless",
                submenu: [
                    {
                        label: "Bluetooth Headsets",
                        url: "/Wireless/Bluetooth Headsets",
                    },
                    {
                        label: "Boom HeadPhones",
                        url: "/Wireless/Boom HeadPhones",
                    },
                ],
            },
            {
                label: "True Wireless",
                url: "/True Wireless",
                submenu: [
                    {
                        label: "Earbuds",
                        url: "/True Wireless/Earbuds",
                    },

                ],
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
            bg="light"
            expand="lg"
            variant="light">
            <Navbar.Brand href="#home">
                <h1
                    style={{
                        color: "green",
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

