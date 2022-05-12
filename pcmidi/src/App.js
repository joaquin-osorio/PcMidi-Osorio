import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="generalContainer">
      <NavBar />
      {/* <ItemListContainer greeting='Bienvenido a la tienda virtual'/>
      <ItemDetailContainer /> */}
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/category/:id' element={<ItemListContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
 