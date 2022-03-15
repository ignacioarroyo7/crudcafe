import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup,Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ItemProducto = (props) => {

    const eliminarProducto = ()=>{
        //console.log(props.producto.id)

        // confirmar la eliminacion
        Swal.fire({
            title: 'Estás de seguro que quieres eliminar el producto?',
            text: "Una vez eliminado no se pueden revertir los cambios",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:'Cancelar',
            confirmButtonText: 'Si, borrar producto!'
          }).then(async(result) => { //async va en la funcion mas cercana del fetch
            if (result.isConfirmed) {
                //logica para pedir a la api para pedir borrar el producto
                try {
                    //URL es la url de la api concatenado el /id del producto
                    const URL = process.env.REACT_APP_API_URL+'/'+props.producto.id;
                    const respuesta = await fetch(URL,{method:"DELETE",headers:{"Content-Type":"application/json"}}); //no agrego el body pq no envio un objeto como en el caso de POST
                    console.log(respuesta);
                    if(respuesta.status===200){//si la api borro el producto, muestro el msj
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'El producto fue eliminado correctamente!',
                            showConfirmButton: false,
                            timer: 1500
                          });
                          //llamar a consultar API
                          props.consultarAPI();
                    }
                
                } catch (error) {
                    console.log(error);
                }
            }
          })
    }

    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                <p>
                {props.producto.nombreProducto} 
                <span className='fw-bolder'>- Precio: $ {props.producto.precioProducto}</span>
                </p>
                <div>
                    <Link to={`/productos/editar/${props.producto.id}`} className='btn btn-warning me-2'>Editar</Link>
                    <Button variant='danger' onClick={()=>eliminarProducto()}>Borrar</Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;