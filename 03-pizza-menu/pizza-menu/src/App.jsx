import "./App.css";
import { pizzaData } from "../data";

import { useEffect } from "react";

import db from "./firebaseConfig"; // Get a list of cities from your database
import { collection, getDocs } from "firebase/firestore/lite";

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : ` $${pizzaObj.price}`}</span>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    async function getCities(db) {
      const citiesCol = collection(db, "pizza");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);

      return cityList;
    }
    getCities(db);
  }, []);

  return (
    <div className="container">
      <Headers />
      <Menu />
      <Footer />
    </div>
  );
}

function Headers() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizza = pizzaData.length;
  //const numPizza = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>Authentic italian cusine</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry we are currently closed.</p>
      )}
    </main>
  );
}
function Footer() {
  //const hour = new Date().getHours();
  const hour = 9;
  const openHour = 8;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed");
  return (
    <footer className="footer">
      We are currently open from {openHour}:00 to {closeHour}:00.
    </footer>
  );
}
export default App;
