import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup,Button } from 'react-bootstrap';

const ItemProducto = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                <p>
                {props.producto.nombreProducto} 
                <span className='fw-bolder'>- Precio: $ {props.producto.precioProducto}</span>
                </p>
                <div>
                    <Button variant='warning' className='me-2'>Editar</Button>
                    <Button variant='danger'>Borrar</Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;