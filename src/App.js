import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import ListaProducto from "./components/products/ListaProducto";
import AgregarProducto from "./components/products/AgregarProducto";
import EditarProducto from "./components/products/EditarProducto";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/productos"
          element={<ListaProducto></ListaProducto>}
        ></Route>
        <Route exact path="/productos/nuevo"
          element={<AgregarProducto></AgregarProducto>}
        ></Route>
        <Route exact path="/productos/editar"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
