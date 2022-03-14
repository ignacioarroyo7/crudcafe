import React from 'react';
import error from "../../img/error-404.jpg"
import { Container } from 'react-bootstrap';

const Error404 = () => {
    return (
        <Container className='text-center'>
            <img src={error} alt="error 404" className='w-100'/>
        </Container>
    );
};

export default Error404;