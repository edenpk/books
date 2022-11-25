import React, { useState, useEffect } from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(async () => {
    const data = await fetchData();
    console.log(data);
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + productsState
    );
    return response;
  };

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <SearchBar products={productsState} />
      <Button>Search</Button>
    </div>
  );
};

export default App;
