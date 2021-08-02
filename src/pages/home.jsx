import React, { useEffect, useContext } from "react";
import ProductCard from "components/Product";
import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "contexts/products";
import { CommonStateContext } from "contexts/common";
import { UserProvider } from "contexts/user";
import Consumer from "contexts/consumer";
import { ConsumerWrapper } from "contexts/consumer";

const Home = () => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  const productsList =
    products &&
    products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        !searchKeyword
      );
    });

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  if (isLoading) {
    return (
      <div className="products-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="products-wrapper">
      <div className="products">
        {isLoaded &&
          productsList.map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
      </div>
      <UserProvider>
         <ConsumerWrapper/>
      </UserProvider>
    </div>
  );
};

export default Home;
