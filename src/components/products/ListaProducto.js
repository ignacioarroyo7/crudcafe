import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListaProducto = () => {
  return (
    <div>
      <section className="container text-center">
          <h1 className="display-1 my-5">Lista de productos</h1>
          <hr />
      </section>
      <ListGroup>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
      </ListGroup>
    </div>
  );
};

export default ListaProducto;
