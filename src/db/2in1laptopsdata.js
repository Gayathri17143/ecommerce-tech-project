import { AiFillStar } from "react-icons/ai";
import laptop1 from "../assets/1-lenovo-ideapad-flex-5-gen-7-amd-r5-5500u-windows-11-home-2-in-1-laptop-82r9005jin-storm-grey-.png"
import laptop2 from "../assets/2-asus-vivobook-s-14-flip-ryzen-r5-7530u-window-11-home-2-in-1-laptop-quiet-blue.png"
import laptop3 from "../assets/3-hp-pavilion-x360-intel-core-i5-13th-gen-windows-11-home-2-in-1-laptop-14-ek1009tu-pale-rose-gold.png"
import laptop4 from "../assets/4-samsung-galaxy-book4-pro-360-intel-core-ultra-7-windows-11-home-2-in-1-laptop-np960qgk-kg2in-moonstone-gray.png"
import laptop5 from "../assets/5-Asus-zenbook-14-flip-oled-intel-evo-core-i5-13th-gen-windows-11-home-laptop-up3404va-kn543ws-foggy-silver.png"
import laptop6 from "../assets/6-Dell-inspiron-7430-intel-core-i5-13th-gen-windows-11-home-2-in-1-laptop-ic7430cjyfn001ors1-platinum-silver.png"
import laptop7 from "../assets/7-Hp-envy-intel-core-i7-12th-gen-windows-11-home-2-in-1-laptop-15-ew0048tu-nightfall-black.png"
 
 
const data = [
  {
    id:1,
    img: laptop1,
    title: "Lenovo ideapad flex 5 gen 7 amd r5 5500u windows 11 home 2 in 1 laptop",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,59,900",
    inStock: true,
    // prevPrice: 65000,
    Price: "63990",
    company: "lowtohigh",
    color: "grey",
    category: "lenovo",
    discount: "5",
    inWishlist: false,
  },
  {
    id:2,
    img: laptop2,
    title: "Asus vivobook s 14 flip ryzen r5 7530u window 11 home 2 in 1 laptop",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,19,900",
    inStock: false,
    // prevPrice: 65000,
    Price: "74990",
    company: "lowtohigh",
    color: "blue",
    category: "asus",
    discount: 10,
    inWishlist: false,
  },

  {
    id:3,
    img: laptop3,
    title: "hp pavilion x360 intel core i5 13th gen windows 11 home 2 in 1 laptop 14",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 89,900",
    inStock: true,
    // prevPrice: 65000,
    Price: "82990",
    company: "lowtohigh",
    color: "gold",
    category: "hp",
    discount: 5,
    inWishlist: false,
  },
  {
    id:4,
    img: laptop4,
    title: "samsung galaxy book4 pro 360 intel core ultra 7 windows 11 home 2 in 1 laptop",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 79,900",
    inStock: false,
    // prevPrice: 65000,
    Price: "179990",
    company: "hightolow",
    color: "grey",
    category: "samsung",
    discount: 5,
    inWishlist: false,
  },
  {
    id:5,
    img: laptop5,
    title: "Asus zenbook 14 flip oled intel evo core i5 13th gen windows 11 home laptop",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 1,02,999",
    inStock: true,
    // prevPrice: 65000,
    Price: "99990",
    company: "hightolow",
    color: "white",
    category: "asus",
    discount: 10,
    inWishlist: false,
  },
  {
    id:6,
    img: laptop6,
    title: "Dell inspiron 7430 intel core i5 13th gen windows 11 home 2 in 1 laptop",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 99,999",
    inStock: true,
    // prevPrice: 65000,
    Price: "82990",
    company: "hightolow",
    color: "white",
    category: "dell",
    discount: 5,
    inWishlist: false,
  },

   
   
  {
    id:7,
    img: laptop7,
    title: "Hp envy intel core i7 12th gen windows 11 home 2 in 1 laptop 15",
    // star: <AiFillStar className="rating-star" />,
    // reviews: "(reviews)",
    // prevPrice: "₹ 49,999",
    inStock: true,
    // prevPrice: 65000,
    Price: "113990",
    company: "hightolow",
    color: "black",
    category: "hp",
    discount: 5,
    inWishlist: false,
  },
  
   
];

export default data;
