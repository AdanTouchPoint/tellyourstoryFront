import React, {Fragment, useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
//import Card from "react-bootstrap/cjs/Card";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

const cryptoRandomString = require("crypto-random-string");


const RegisterForm = ({createUser}) => {

    const [user, setUser] = useState({
        submissionType: '',
        name: '',
        lastName: '',
        age: '',
        city: '',
        state: '',
        cp: '',
        email: '',
        id: ''
    });
    const [error, setError] = useState(false)
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(user)
    }
    const {submissionType, name, lastName, age, city, state, cp, email} = user;

    const submitUser = e => {
        e.preventDefault();
        if (submissionType.trim() === '' || name.trim() === '' || lastName.trim() === '' ||
            age.trim() === '' || city.trim() === '' || state.trim() === '' || cp.trim() === '' || email.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        createUser(user)
        const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
        user.id = randomId;
        console.log(user)

        setUser({
            submissionType: '',
            name: '',
            lastName: '',
            age: '',
            city: '',
            state: '',
            cp: '',
            email: '',
            id: ''
        })
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>

                <h2>Register</h2>
                {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
                <Form
                    onSubmit={submitUser}
                >
                    <Form.Group controlId="submissionType">
                        <Form.Label>Example select</Form.Label>
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
                            name="cp"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Control
                            type="number"
                            placeholder="Age"
                            name="age"
                            onChange={handleChange}
                        />
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
                        <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            onChange={handleChange}
                        />
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

                    <button
                        type={'submit'}
                        className={'u-full-width'}
                    >
                        Save
                    </button>
                </Form>
                </Col>
            </Row>
        </Container>

        </Fragment>
    )
}

export default RegisterForm;




