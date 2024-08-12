import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import Banner from "./Banner";  //PROP EXAMPLE - BANNER

const Header = () => {
  const [value, setvalue] = useState(0);

  const valuehandler = () => {
    // setvalue(value+1);
    // console.log(value);
    setvalue(value + 1);
    console.log(value);
  };

  const subtracthandler = () => {
    setvalue(value - 1);
    console.log(value);
  };

  const a = () => {
    console.log("Hello world");
  }                                                           //PROP EXAMPLE 3 - BANNER

  return (
    <div className={styles.header}>
      <p>This is a paragraph</p>
      <button onClick={valuehandler}>Addition</button>
      <button onClick={subtracthandler}>Subtraction</button>
      <Banner heading={a}/>  
    </div>
  );
};

export default Header;
