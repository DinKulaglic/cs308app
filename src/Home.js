import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>This is the home page!</h1>
        <h2>It is a work in progress :)</h2>
        <p>use the purple links above to navigate between pages</p>
      </div>
    );
  }
}

export default Home;
