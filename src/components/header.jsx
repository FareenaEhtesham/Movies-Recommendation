import React from "react";

const MyHeader = props => {
  return (
    <header className="App-header">
      <h2>{props.heading}</h2>
    </header>
  );
};

export default MyHeader;
