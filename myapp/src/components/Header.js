import React from "react";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [value, setvalue] = useState(0);

  const valuehandler = () => {
    setvalue(value+1);
    console.log(value);
  }

  return (
    <div className={styles.header}>
      <p>This is a paragraph</p>
      <button onClick={valuehandler}>Click here</button>
    </div>
  );
};

export default Header;
