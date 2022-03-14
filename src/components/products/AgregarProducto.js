import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { campoRequerido, rangoPrecio } from "../helpers/helpers";
import Swal from 'sweetalert2'

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoriaProducto, setCategoriaProducto] = useState("");
  const [mensajeError, setMensajeError] = useState(false);

  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('desde handle submit');

    //validar los input
    if (
      campoRequerido(nombreProducto) &&
      rangoPrecio(precioProducto) &&
      campoRequerido(categoriaProducto)
    ) {
      setMensajeError(false);
      //crear un objeto para enviar a la api
      const productoNuevo = {
        //notacion implicita de objeto, solo se puede cuando el nombre de la propiedad es igual al nombre de variable que contiene el valor
        nombreProducto,
        precioProducto,
        categoriaProducto,
      };
      //console.log(productoNuevo);
      //enviar el objeto producto a la api, peticion POST fetch(URL,Objeto)
      try{
        const parametros = {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(productoNuevo)
        }
        const respuesta = await fetch(URL,parametros) 
        //console.log(respuesta);
        
        if(respuesta.status===201){
          //mostrar mensaje al usuario que se cargo correctamente
          Swal.fire(
            'Producto creado',
            'El producto se creó correctamente',
            'success'
          )
          //console.log(e.target)//para controlar si el e.target es el formulario en ese momento y si es.
          e.target.reset(); //limpia los value de todos el form
        }else{
          //mostrar cartel de error, que lo intente mas tarde
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, intentelo más tarde',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      }catch(error){

        console.log('error en enviar el objeto a la api')
      }
    } else {
      setMensajeError(true);
    }

    //si falla la validacion mostamos un mensaje al usuario
  };

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre producto..."
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar precio del producto..."
            onChange={(e) => setPrecioProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria producto</Form.Label>
          <Form.Select onChange={(e) => setCategoriaProducto(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="sandwich">Sandwich</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar producto
        </Button>
      </Form>
      {mensajeError === true ? (
        <Alert className="my-2" variant="danger">
          Debe completar todos los campos y el precio de los productos tiene que
          estar en $1 y $5000
        </Alert>
      ) : null}
    </Container>
  );
};

export default AgregarProducto;
