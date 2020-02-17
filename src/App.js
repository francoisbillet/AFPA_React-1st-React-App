import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User.js";

function App() {
  const user = {
    lastname: "Billet",
    firstname: "François"
  };
  const cart = [
    { title: "Produit", price: 58 },
    { title: "Produit 2", price: 158 },
    { title: "Produit 3", price: 3678.5 }
  ];
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
      <div>
        <User user={user} cart={cart} />
      </div>
    </React.Fragment>
  );
}

export default App;
