import React from "react";

const App = () => {



  var a = [4,3,6,5,7];
  
  //STANDARD METHOD
  // var b = a.map( function mapping(x){
  //   return x*2;
  // });

  //ARROW FUNCTION METHOD

  const b = a.map((x) => x*2)
  console.log(b);



  return <div>App</div>;
};

export default App;
