import { AiFillStar } from "react-icons/ai";
import apple from "../assets/Apple-iphone-15-pro-max-black.png"
import apple1 from "../assets/apple-iphone-15-plus-blue.png"
import apple2 from "../assets/Apple-iphone-13-product-red.png"
import apple3 from "../assets/Apple-14-Plus-Blue.png"
import samsung from "../assets/Samsung-Galaxy-Z-Flip-5-5G-Gray.png"
import samsung1 from "../assets/Samsung-galaxy-s24-5g-onyx-black.png"
import oneplus from "../assets/Oneplus-12r-5g-cool-blue.png"
import oppo from "../assets/Oppo-a15s-Fancy-White.png"
import tecno from "../assets/Tecno-phantom-x2-pro-5g-stardust-grey.png"
import vivo from "../assets/Vivo-v25-pro-sailing-blue.png"
import redmi from "../assets/Redmi-note-12-5g-frosted-green.png"
import realme from "../assets/realme-12-pro-plus-5g-explorer-red.png"
import nokia from "../assets/Nokia-g21-nordic-blue.png"
import oneplus1 from "../assets/oneplus-10r-5g-forest-green.png"
import samsung2 from "../assets/samsung-galaxy-s22-ultra-5g-phantom-white.png"
import redmi1 from "../assets/redmi-a3-midnight-black.png"
const data = [
  {
    id:1,
    img: apple,
    title: "Apple iPhone 15 Pro Max",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 1,59,900",
    Price: "151900",
    company: "hightolow",
    color: "black",
    category: "apple",
    
  },
  {
    id:2,
    img: apple1,
    title: "Apple iPhone 15 Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 1,19,900",
    Price: "109990",
    company: "hightolow",
    color: "blue",
    category: "apple",
  },

  {
    id:3,
    img: apple2,
    title: "Apple iPhone 13",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 89,900",
    Price: "82990",
    company: "hightolow",
    color: "red",
    category: "apple",
  },
  {
    id:4,
    img: apple3,
    title: "Apple iPhone 14 Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 79,900",
    Price: "71990",
    company: "hightolow",
    color: "blue",
    category: "apple",
  },
  {
    id:5,
    img: samsung,
    title: "Samsung Galaxy Z Flip 5 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 1,02,999",
    Price: "99999",
    company: "5Gmobiles",
    color: "grey",
    category: "samsung",
  },
  {
    id:6,
    img: samsung1,
    title: "Samsung Galaxy S24 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 99,999",
    Price: "89999",
    company: "5Gmobiles",
    color: "black",
    category: "samsung",
  },

   
   
  {
    id:7,
    img: tecno,
    title: "Tecno Phantom X2 Pro 5G ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 49,999",
    Price: "44999",
    company: "5Gmobiles",
    color: "grey",
    category: "tecno",
  },
  
  {
    id:8,
    img: oneplus,
    title: "Oneplus 12R 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 40,999",
    Price: "39999",
    company: "5Gmobiles",
    color: "blue",
    category: "oneplus",
  },
  {
    id:9,
    img: redmi1,
    title: "Redmi A3",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 10,999",
    Price: "7999",
    company: "lowtohigh",
    color: "black",
    category: "redmi",
   
  },
  {
    id:10,
    img: nokia,
    title: "Nokia G21",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 16,999",
    Price: "12999",
    company: "lowtohigh",
    color: "blue",
    category: "nokia",
  },
  {
    id:11,
    img: oppo,
    title: "Oppo A15s ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 15,990",
    Price: "14999",
    company: "lowtohigh",
    color: "white",
    category: "oppo",
  },
  {
    id:12,
    img: vivo,
    title: "Vivo V25 Pro",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 39,999",
    Price: "32999",
    company: "lowtohigh",
    color: "blue",
    category: "vivo",
  },
  

  {
    id:13,
    img: redmi,
    title: "Redmi Note 12 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 19,999",
    Price: "14999",
    company: "5Gmobiles",
    color: "green",
    category: "redmi",
  },
  {
    id:14,
    img: realme,
    title: "Realme 12 Pro Plus 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 34,999",
    Price: "29999",
    company: "5Gmobiles",
    color: "red",
    category: "realme",
  },
  
  {
    id:15,
    img: oneplus1,
    title: "Oneplus 10R 5G ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 42,999",
    Price: "38999",
    company: "5Gmobiles",
    color: "green",
    category: "oneplus",
  },
  {
    id:16,
    img: samsung2,
    title: "Samsung Galaxy S22 Ultra 5G",
    star: <AiFillStar className="rating-star" />,
    reviews: "(reviews)",
    prevPrice: "₹ 1,09,999",
    Price: "102999",
    company: "5Gmobiles",
    color: "white",
    category: "samsung",
  },
 
];

export default data;
