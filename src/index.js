import React from "react";
import { render } from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

render(<Index />, document.getElementById("portal"));
