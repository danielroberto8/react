import React from "react";

const ProductData = (props) => {
  const { productData } = props;
  const {
    author,
    title,
    review,
    desc,
    price,
    discount,
    image,
    stock,
  } = productData;
  const renderBooks = () => {
    const checkPrice = (discount) => {
      if (discount) {
        return (
          <p className="font-weight-bold">
            ${(price - (price * discount) / 100).toFixed(2)}&nbsp;&nbsp;&nbsp;<strike className="font-weight-light">${price}</strike>
          </p>
        );
      } else {
        return <p className="">${price}</p>;
      }
    };

    const checkStock = (stock) => {
      if (stock) {
        return (
          <center>
            <input
              className="btn btn-outline-primary btn-lg"
              type="button"
              value="Buy Now"
              onClick={popUpTitle}
            />
          </center>
        );
      } else {
        return (
          <center>
            <input
              className="btn btn-secondary btn-lg"
              type="button"
              value="Buy Now"
              disabled
            />
          </center>
        );
      }
    };
    
    const popUpTitle = () =>{
        alert(title)
    }

    return (
      <div className="row text-left">
        <div className="col-6">
          <img className="img-fluid" src={image} alt="Cover" />
        </div>
        <div className="col-6">
          <p className="font-weight-light">{author}</p>
          <h5 className="font-weight-bold">{title}</h5>
          <p className="">{review} / 5 Review</p>
          <p className="font-weight-light">{desc}</p>
          {checkPrice(discount)}
        </div>
        <div className="col-12">{checkStock(stock)}</div>
      </div>
    );
  };
  return <div className="col-md-6 col-12 p-5">{renderBooks()}</div>;
};

export default ProductData;