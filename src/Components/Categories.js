import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
export default function App() {

    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
          const newItem = Data.filter((newVal) => {
                return newVal.category === curcat;
          });
          setItem(newItem);
    };
    return (
          <>

                <div className="container-fluid">
                      <div className="row">
                            <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
                            <Buttons
                                  filterItem={filterItem}
                                  setItem={setItem}
                                  menuItems={menuItems}
                            />
                            <Card item={item} />
                      </div>
                </div>
               


          </>
    );
}