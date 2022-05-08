import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="generalContainer">
      <NavBar />
      {/* <ItemListContainer greeting='Bienvenido a la tienda virtual'/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
 