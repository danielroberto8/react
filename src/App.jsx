import React from "react";
import "./App.css";
import "./bootstrap.css";
import Handmaid from "./views/components/handmaid.png"
import Crazy from "./views/components/crazyRich.png"
import Brave from "./views/components/brave.png"
import Educated from "./views/components/educated.png"
import ProductData from "./views/screen/ProductData";
import CounterScreen from "./views/screen/CounterScreen"
import InputScreen from "./views/screen/InputScreen";
import AuthScreen from "./views/screen/AuthScreen";

function App() {
  // let arrProduct = [
  //   {
  //     nama: "Sepatu Basket",
  //     harga: 2300000,
  //     desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
  //     discount: 20,
  //     stock: 10,
  //   },
  //   {
  //     nama: "Kaos Polo000",
  //     harga: 250000,
  //     desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
  //     discount: 40,
  //     stock: 0,
  //   },
  //   {
  //     nama: "Celana Jeans",
  //     harga: 550000,
  //     desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
  //     discount: 0,
  //     stock: 5,
  //   },
  // ];

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  // const renderBooks = () =>{
  //   return arrBooks.map((val)=>{
  //     return <ProductData productData={val} />;
  //   });
  // }
  return <AuthScreen/>;
}

export default App;
