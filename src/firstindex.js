import React, { useState, useEffect } from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flower")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);
      });
    console.log(productsState);
  }, []);

  /*   setTimeout(() => {
            setProductsState([
                "tooth paste",
                "tooth brush",
                "mouth wash",
                "dental floss",
                "mouth guard",
            ])

        }, 2000)

        */

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <Button>Hello</Button>
      <Button>one</Button>
      <Button>Hello</Button>

      {hasProducts ? <SearchBar products={productsState} /> : "Loading"}

      <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"50px"} />
      <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"5px"} />
      <CountButton incrementBy={7} buttonColor={"green"} borderRadius={"8px"} />
    </div>
  );
};

export default App;
