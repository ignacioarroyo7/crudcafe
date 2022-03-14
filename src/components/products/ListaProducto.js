import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Button, Container } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListaProducto = () => {
  return (
    <Container className="text-center">
          <h1 className="display-1 my-5">Lista de productos</h1>
          <hr />
      <article className="d-flex align-items-center mb-4 justify-content-end">
          <p className="my-0 me-4 fw-bold">Agregar nuevos productos:</p>
          <Button variant='primary'>Agregar</Button>
          <hr />
      </article>
      <ListGroup>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
        <ItemProducto></ItemProducto>
      </ListGroup>
    </Container>
  );
};

export default ListaProducto;
