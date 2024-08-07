import React from "react";

const App = () => {



  var a = [4,3,6,5,7];

  // var b = a.filter((x) => x>3);
  // console.log(b);

  //COMBINING MAP AND FILTER METH

  var b = a.map((x) => x/2).filter((x) => x>2);
  console.log(b);



  return <div>App</div>;
};

export default App;
