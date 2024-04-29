import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Card, Row } from "react-bootstrap";
import Image1 from "../../assets/1-Oppo-f25-pro-5g.png"
import Image2 from "../../assets/2-Realme-12x-5g.png"
import Image3 from "../../assets/3-Samsung-Galaxy-Z-Flip-5-5G.png"
import Image4 from "../../assets/4-Tecno-pova-6-pro-5g.png"
import Image5 from "../../assets/5-Vivo-T3-5G.png"
import Image6 from "../../assets/6-Apple-iphone-15-pro-max.png"
import Image7 from "../../assets/7-redmi-note-13-pro-plus-5g.png"
import Image8 from "../../assets/8-nokia-c32.png"
import Image9 from "../../assets/9-Oneplus-12-5g.png"
// Card component to display each mobile brand
const MobileCard = ({ mobile }) => {
    return (

        <Card className="mb-3" style={{marginTop:"20px"}}>
            <Card.Img variant="top" src={mobile.url} style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"}} alt={mobile.name} />
            <Card.Body>
                <Card.Title>{mobile.name}</Card.Title>
                <Card.Text>Brand: {mobile.brand}</Card.Text>
                <Card.Text>Price: {mobile.price}</Card.Text>
            </Card.Body>
        </Card>

    );
};
const mobiles1 = [
    {
        "id": 1,
        "name": "Samsung Galaxy Z Flip 5 5G",
        "brand": "Samsung",
        "price": "₹ 99,999",
        "url": Image3
    },
    {
        "id": 2,
        "name": "Apple iphone 15 pro max",
        "brand": "Apple",
        "price": "₹1,51,900",
        "url": Image6
    },
    {
        "id": 3,
        "name": "Redmi note 13 pro plus 5g",
        "brand": "Redmi",
        "price": "₹31,999",
        "url": Image7
    },
    {
        "id": 4,
        "name": "Oneplus 12 5g",
        "brand": "OnePlus",
        "price": "₹69,999",
        "url": Image9
    },
    {
        "id": 5,
        "name": " Tecno pova 6 pro 5g",
        "brand": "Tecno",
        "price": "₹21,998",
        "url": Image4
    },
    {
        "id": 6,
        "name": "Oppo f25 pro 5g",
        "brand": "Oppo",
        "price": "₹23,999",
        "url": Image1
    },
    {
        "id": 7,
        "name": "Realme 12x 5g",
        "brand": "Realme",
        "price": "₹14,999",
        "url": Image2
    },
    {
        "id": 8,
        "name": "Vivo T3 5G",
        "brand": "Vivo",
        "price": "₹19,999",
        "url": Image5
    },
    
    {
        "id": 9,
        "name": "Nokia c32",
        "brand": "Nokia",
        "price": "₹600",
        "url": Image8
    }
]
const App = () => {

    const [mobiles, setMobiles] = useState([]);
    const [filteredMobiles, setFilteredMobiles] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("all");

    useEffect(() => {
        // Fetch mobile data using Axios
        axios.get("your_api_endpoint")
            .then((response) => {
                setMobiles(response.data);
                setFilteredMobiles(response.data);
            })
            .catch((error) => {
                console.error("Error fetching mobile data: ", error);
            });
    }, []);



    useEffect(() => {
        // Filter mobiles based on selected brand
        if (selectedBrand === "all") {
            setFilteredMobiles(mobiles1);
        } else {
            const filtered = mobiles1.filter((mobile) => mobile.brand === selectedBrand);
            setFilteredMobiles(filtered);
        }
    }, [selectedBrand, mobiles1]);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    return (
        <div>
            
            <select value={selectedBrand} onChange={handleBrandChange}>
                <option value="all">All Brands</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Redmi">Redmi</option>
                <option value="Realme">Realme</option>
                <option value="Oppo">Oppo</option>
                <option value="Vivo">Vivo</option>
                <option value="Tecno">Tecno</option>
                <option value="Nokia">Nokia</option>
                {/* Add options for brands */}
            </select>
            <div className="card-container">
                <Row>
                    {filteredMobiles.map((mobile) => (
                        <Col key={mobile.id} sm={6} md={4} lg={3} xl={4}>
                            <MobileCard mobile={mobile} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default App;
