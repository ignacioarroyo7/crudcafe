import React from 'react';
import { ListGroup, Container } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { Link } from 'react-router-dom';

const ListaProducto = (props) => {
  return (
    <Container className="text-center">
          <h1 className="display-1 my-5">Lista de productos</h1>
          <hr />
          <article className="d-flex align-items-center mb-4 justify-content-end">
            <p className="my-0 me-4 fw-bold">Agregar nuevos productos:</p>
            <Link to='/productos/nuevo' className='btn btn-primary'>Agregar +</Link>
          </article>
          <ListGroup>
            {
              props.producto.map((producto)=><ItemProducto key={producto._id} producto={producto} consultarAPI={props.consultarAPI}></ItemProducto>)
            }
          </ListGroup>
    </Container>
  );
};

export default ListaProducto;
