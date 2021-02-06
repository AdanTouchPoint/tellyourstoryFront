import React, {Fragment, useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

const cryptoRandomString = require("crypto-random-string");


const RegisterForm = ({user, setUser, hidden, smokerSub, setSmokerSub, setNoSmokerSub}) => {

    const [error, setError] = useState(false)
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(user)
    }
    const {submissionType, name, lastName, age, city, state, cp, email, smoker} = user;

    const click = e => {
        e.preventDefault();
        if (submissionType.trim() === '' || name.trim() === '' || lastName.trim() === '' ||
            age.trim() === '' || city.trim() === '' || state.trim() === '' || cp.trim() === '' || email.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
        user.id = randomId;
        console.log(user)

        if (smoker === "1") {
            setSmokerSub(false)
        }
        else {
            setNoSmokerSub(false)
        }
    }

    return (
        <Fragment>
            <Container hidden={hidden}>
                <Row>
                    <Col xs={10} md={8} lg={8}
                         className={"container"}>

                        <h1>Register</h1>
                        {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
                        <Form>
                            <Form.Group controlId="submissionType">

                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Do You Want Your Submission</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        as="select"
                                        name="submissionType"
                                        onChange={handleChange}

                                    >
                                        <option>Choose...</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Control
                                    type="text"
                                    placeholder="LastName"
                                    name="lastName"
                                    onChange={handleChange}

                                />
                            </Form.Group>

                            <Form.Group controlId="age">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Age</InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Control
                                  type={"number"}
                                    placeholder="Age"
                                    name="age"
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="city">
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    onChange={handleChange}

                                />
                            </Form.Group>

                            <Form.Group controlId="state">
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>State</InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Control
                                    as="select"
                                    placeholder="State"
                                    name="state"
                                    onChange={handleChange}

                                >
                                <option>Choose...</option>
                                <option>New South Wales</option>
                                <option>Victoria</option>
                                <option>Queensland</option>
                                <option>Tasmania</option>
                                    <option>Western Australia</option>
                                    <option>South Australia</option>
                                    <option> Australian Capital Territory</option>
                                    <option> Northern Territory</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="cp">
                                <Form.Control
                                    type="text"
                                    placeholder="Code Postal"
                                    name="cp"
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            <Form.Group>
                                <Button
                                    size={'lg'}
                                     onClick={click}
                                    className={'u-full-width'
                                    }
                                >
                                    Save
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default RegisterForm;




