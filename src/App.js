import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProducto from './components/products/ListaProducto';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <ListaProducto></ListaProducto>
      <Footer></Footer>
    </div>
  );
}

export default App;
