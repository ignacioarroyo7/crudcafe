import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup,Button } from 'react-bootstrap';

const ItemProducto = () => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                asdasd
                <section>
                    <Button variant='warning' className='me-2'>Editar</Button>
                    <Button variant='danger'>Borrar</Button>
                </section>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;