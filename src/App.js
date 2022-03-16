import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import ListaProducto from './components/products/ListaProducto';
import AgregarProducto from './components/products/AgregarProducto';
import EditarProducto from './components/products/EditarProducto';
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [producto, setProducto] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  //console.log(URL);

  useEffect(() => {
    consultarAPI()
  },[]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      //console.log(datos);
      setProducto(datos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/productos' element={<ListaProducto producto={producto} consultarAPI={consultarAPI}></ListaProducto>}></Route>
        <Route exact path='/productos/nuevo' element={<AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>}></Route>
        <Route exact path='/productos/editar/:id' element={<EditarProducto consultarAPI={consultarAPI}></EditarProducto>}></Route>       
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
