import React from "react";

const ProductCard = (props) => {
  const { productData } = props;
  const { nama, harga, desc, discount, stock } = productData;
  const checkStock = (stock) => {
    if (stock) {
      return (
        <div>
          <h3>Nama: {nama}</h3>
          <h4>Harga Rp.{harga}</h4>
          {
            //if ternary
            discount > 0 ? (
              <h4>
                Diskon {discount}% , menjadi Rp.
                {harga - (harga * discount) / 100}
              </h4>
            ) : null
          }
          <h5>Stock {stock} pcs</h5>
          <p>{desc}</p>
        </div>
      );
    } else {
      return <h3>Stock habis bang</h3>;
    }
  };
  return (
    <div
      style={{
        width: "240px",
        padding: "16px",
        border: "1px solid black",
        borderRadius: "7px",
      }}
    >
      {checkStock(stock)}
    </div>
  );
};

export default ProductCard;
