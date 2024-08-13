import React from "react";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
import Banner from "./Banner";  //PROP EXAMPLE - BANNER
//import { useEffect } from "react";

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


  return (                                                              //PROP EXAMPLE 4 - BANNER
    <div className={styles.header}>
      <p>This is a paragraph</p>
      <button onClick={valuehandler}>Addition</button>
      <button onClick={subtracthandler}>Subtraction</button>
      <Banner heading={{a:"Main Topic"}}/>      
    </div>
  );
};

export default Header;
