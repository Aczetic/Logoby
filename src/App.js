import React from "react";
import Header from "./components/Header";
import Information from "./components/Information";

import "./App.css";

const App = () => {
  return (
    <div id="parent">
      <Header />
      <Information
        Heading={["Launch Your Website", "with a new logo", "from logobly"]}
        imgOrder="orderRight"
      />
    </div>
  );
};

export default App;
