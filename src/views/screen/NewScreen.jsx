import React from "react";

const Komponen = () => {
  const btnHandler = () => {
    alert("awuuuuuu");
  };

  return <input onClick={btnHandler} type="button" value="Click me!" />;
};

const NewScreen = () => {
  return (
    <div>
      <h3>Ini New Screen</h3>
      <Komponen />
    </div>
  );
};

export default NewScreen;
