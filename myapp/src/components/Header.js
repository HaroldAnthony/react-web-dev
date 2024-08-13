import React from "react";
import styles from "./header.module.css";
import { useState, useEffect} from "react";

const Header = () => {
  const [value, setvalue] = useState(0);
  const [statement , setstatement ] = useState(true);

  const valuehandler = () => {
    // setvalue(value+1);
    // console.log(value);
    setvalue(value + 1);
  };

  const subtracthandler = () => {
    setvalue(value - 1);
  };

  const statementhandler = () => {
    setstatement(!statement);
    console.log(statement);
  };

  useEffect(() => {
    console.log("changed the data");
  },[value]);


  return (                                                              
    <div className={styles.header}>
      <button onClick={valuehandler}>Addition</button>
      <button onClick={subtracthandler}>Subtraction</button>
      <button onClick={statementhandler}>Boolean</button>
      <h1>{value}</h1> 
    </div>
  );
};

export default Header;
