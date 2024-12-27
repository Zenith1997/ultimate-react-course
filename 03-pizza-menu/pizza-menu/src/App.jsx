import "./App.css";
import { pizzaData } from "../data";
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function App() {
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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 && (
        <div>
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </div>
      )}
    </main>
  );
}
function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open.
    </footer>
  );
}
export default App;
