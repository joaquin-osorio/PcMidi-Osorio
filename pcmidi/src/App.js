import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="generalContainer">
      <NavBar />
      <ItemListContainer greeting='Bienvenido a la tienda virtual'/>
    </div>
  );
}

export default App;
 