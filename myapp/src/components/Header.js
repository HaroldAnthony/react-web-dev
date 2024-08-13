import React from "react";
import { useState, useEffect} from "react";

const Header = () => {
  const [value, setvalue] = useState(0);

  const valuehandler = () => {
    setvalue(value + 1);
  };

  const subtracthandler = () => {
    setvalue(value - 1);
  };

  useEffect(() => {
    console.log("changed the data");
  },[value]);


  return (                                                              
    <div>
      <button onClick={valuehandler}>Addition</button>
      <button onClick={subtracthandler}>Subtraction</button>
      <h1>{value}</h1> 
    </div>
  );
};

export default Header;
