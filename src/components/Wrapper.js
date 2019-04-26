import React from 'react';
import { Container } from 'reactstrap';

export default (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}