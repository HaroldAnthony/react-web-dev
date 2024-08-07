import React from "react";

const App = () => {



  var a = [4,3,6,5,7];

  var b = a.reduce((acc, curr) => {
    //return acc;  - acc is the initial/first value of the array
    //return curr; - curr is the final/last value of the array
  });

  console.log(b);



  return <div>App</div>;
};

export default App;
