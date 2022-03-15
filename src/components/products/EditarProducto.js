import React,{ useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button,Container} from "react-bootstrap";
import { useParams } from "react-router-dom";


const EditarProducto = () => {

  const {id} = useParams(); //El valor que tiene la propiedad id del objeto parametro, guardalo dentro de const id
  const [producto,setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL+"/"+id;

  
  useEffect(async () => {
    try {
      //consultar 1 producto en particular, peticion GET
      const respuesta = await fetch(URL);
      // console.log(respuesta);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        // console.log(dato)
        setProducto(dato);
      }
    } catch (error) {
      console.log(error);
      //mostrar un mensaje al usuario
    }
  }, []);



  return (
    <Container className="my-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre producto..."
        
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar precio del producto..."
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria producto</Form.Label>
          <Form.Select>
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
    </Container>
  );
};

export default EditarProducto;
