import React, {Fragment} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";


const ThankYou = ({showThankYou}) => {


    return (
        <Fragment>
            <Container hidden={showThankYou}>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>
                            <h1>Thank You!</h1>
                        <h3>Your submission has been sent</h3>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}

export default ThankYou;