import { AiFillStar } from "react-icons/ai";
import Chargertv1 from "../assets/chargers/1-Apple-140w-usb-c-power-adapter-white.png"
import Chargertv2 from "../assets/chargers/2-samsung-25w-travel-adaptor-black.png"
import Chargertv3 from "../assets/chargers/3-conekt-20w-pd-c-port-charger-with-type-c-to-type-c-cable-white.png"
import Chargertv4 from "../assets/chargers/4-Ambrane-raap-hub-75w-multi-port-charger-black.png"
import Chargertv5 from "../assets/chargers/5-inbase-ether-50w-dual-port-charger-with-type-c-cable-white.png"
import Chargertv6 from "../assets/chargers/6-Mi-2A-Fast-Charger-with-Cable-Black.png"
import Chargertv7 from "../assets/chargers/7-Boat-Dual-QC-PD-Port-Rapid-Car-Charger-Black.png"
 
 
const data = [
  {
    id:1,
    img: Chargertv1,
    title: "Apple 140w usb c power adapter",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,59,900",
    Price: "9500",
    company: "hightolow",
    color: "white",
    category: "apple",
    discount: "5",
    inWishlist: false,
    inStock: true,
  },
  {
    id:2,
    img: Chargertv2,
    title: "Samsung 25w travel adaptor",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,19,900",
    Price: "1399",
    company: "hightolow",
    color: "black",
    category: "samsung",
    discount: "5",
    inWishlist: false,
    inStock: true,
  },

  {
    id:3,
    img: Chargertv3,
    title: "Conekt 20w pd c port charger with type c to type c cable",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 89,900",
    Price: "699",
    company: "lowtohigh",
    color: "white",
    category: "conekt",
    discount: "5",
    inWishlist: false,
    inStock: false,
  },
  {
    id:4,
    img: Chargertv4,
    title: "Ambrane raap hub 75w multi port charger",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 79,900",
    Price: "2799",
    company: "lowtohigh",
    color: "black",
    category: "ambrane",
    discount: "5",
    inWishlist: false,
    inStock: true,
  },
  {
    id:5,
    img: Chargertv5,
    title: "Inbase ether 50w dual port charger with type c cable",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,02,999",
    Price: "1499",
    company: "lowtohigh",
    color: "white",
    category: "inbase",
    discount: "5",
    inWishlist: false,
    inStock: true,
  },
  {
    id:6,
    img: Chargertv6,
    title: "Mi 2A Fast Charger with Cable",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 99,999",
    Price: "499",
    company: "lowtohigh",
    color: "black",
    category: "mi",
    discount: "5",
    inWishlist: false,
    inStock: false,
  },

   
   
  {
    id:7,
    img: Chargertv7,
    title: "Boat Dual QC PD Port Rapid Car Charger",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 49,999",
    Price: "699",
    company: "lowtohigh",
    color: "black",
    category: "boat",
    discount: "5",
    inWishlist: false,
    inStock: true,
  },
  
  
   
];

export default data;
