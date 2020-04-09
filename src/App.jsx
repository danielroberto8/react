import React from "react";
import "./App.css";
import ProductCard from "./views/screen/ProductCard";

function App() {
  let arrProduct = [
    {
      nama: "Sepatu Basket",
      harga: 2300000,
      desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
      discount: 20,
      stock: 10,
    },
    {
      nama: "Kaos Polo000",
      harga: 250000,
      desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
      discount: 40,
      stock: 0,
    },
    {
      nama: "Celana Jeans",
      harga: 550000,
      desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
      discount: 0,
      stock: 5,
    },
  ];

  const renderProduct = () => {
    return arrProduct.map((val) => {
      return <ProductCard productData={val} />;
    });
  };
  return <div className="App">{renderProduct()}</div>;
}

export default App;
