import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import Banner from "./Banner";

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

  return (
    <div className={styles.header}>
      <p>This is a paragraph</p>
      <button onClick={valuehandler}>Addition</button>
      <button onClick={subtracthandler}>Subtraction</button>
      <Banner heading="Hello world"/>
    </div>
  );
};

export default Header;
