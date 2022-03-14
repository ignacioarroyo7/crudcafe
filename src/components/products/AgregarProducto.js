import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control type="text" placeholder="Ingresar nombre producto..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionProducto">
          <Form.Label>Descripcion producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar descripcion del producto..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCodigoProducto">
          <Form.Label>Codigo producto</Form.Label>
          <Form.Control type="text" placeholder="Ingresar codigo producto..." />
          <Form.Text className="text-muted">Codigo alfanumerico</Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar producto +
        </Button>
      </Form>
    </div>
  );
};

export default AgregarProducto;
