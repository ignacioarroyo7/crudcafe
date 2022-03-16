import React,{ useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button,Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { campoRequerido, rangoPrecio } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const EditarProducto = (props) => {

  const {id} = useParams(); //El valor que tiene la propiedad id del objeto parametro, guardalo dentro de const id
  const [producto,setProducto] = useState({});
  const [categoriaProducto, setCategoriaProducto] = useState('');
  const URL = process.env.REACT_APP_API_URL+"/"+id;
  //crear variables de referencia
  const nombreProductoRef = useRef('');
  const precioProductoRef = useRef(0);

  const navegacion = useNavigate();

  
  useEffect(async () => {
    try {
      //consultar 1 producto en particular, peticion GET
      const respuesta = await fetch(URL);
      // console.log(respuesta);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        // console.log(dato)
        setProducto(dato);
        setCategoriaProducto(dato.categoriaProducto);
      }
    } catch (error) {
      console.log(error);
      //mostrar un mensaje al usuario
    }
  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    //validar datos
    if(campoRequerido(nombreProductoRef.current.value)&&rangoPrecio(precioProductoRef.current.value)&&campoRequerido(categoriaProducto)){
    //crear objeto y enviarlo a la API
      const productoModificado = {
        nombreProducto : nombreProductoRef.current.value,
        precioProducto : precioProductoRef.current.value,
        categoriaProducto
      }
      console.log(productoModificado)
      //pedir modifcar datos a la api, peticion put
      try{
        const respuesta = await fetch(URL,{
          method: "PUT",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)})
          console.log(respuesta)
        
        if(respuesta.status===200){
          //mostrar mensaje al usuario que se cargo correctamente
          Swal.fire(
            "Producto modificado",
            "El producto se modificó correctamente",
            "success")
            props.consultarAPI();
          navegacion("/productos");
        }

      } catch (error) {
        console.log(error)
        //mostrar mensaje al usuario de que intente hacer la operacion despues
      }
    }else{
      console.log('error en la validacion');
    }
    
  }

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre producto..."
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar precio del producto..."
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria producto</Form.Label>
          <Form.Select value={categoriaProducto} onChange={(e)=>setCategoriaProducto(e.target.value)}>
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
