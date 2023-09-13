import { useEffect, useState } from "react";
import axios from "axios";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


function getProducts() {
  return axios.get("https://dummyjson.com/products?limit=10");
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
        
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return (
 
    <ItemListContainer productsData={products} />
  );
};

export default Home;
