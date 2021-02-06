import React, {Fragment, useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

const cryptoRandomString = require("crypto-random-string");


const NoSmokerSubmission = ({noSmokerSub, setDataNoSmokerSub, dataNoSmokerSub,setNoSmokerAnswers}) => {

    const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataNoSmokerSub.id = randomId;
    const [error, setError] = useState(false)
    const handleChange = e => {
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(dataNoSmokerSub)
    }
    const {close, prescription, story} = dataNoSmokerSub;
    const click = e => {
        e.preventDefault();
        if (close.trim() === '' ||  prescription.trim() === '' || story.trim() === '' ) {
            setError(true)
            return

        }
        setError(false)
        console.log(dataNoSmokerSub)
        setNoSmokerAnswers(false)

    }

    return (
        <Fragment>
            <Container hidden={noSmokerSub}>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>

                        <h2>Create a Submission </h2>
                        {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
                        <Form
                            // onSubmit={"/Thankyou"}
                        >
                            <Form.Group controlId="close">
                                <Form.Label>1) Who close to you has quit smoking by switching to vaping? (tick all that
                                    apply):</Form.Label>
                                <Form.Check aria-label="Checkbox for following text input"name="close" onChange={handleChange} value={' Husband'}/> Husband
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Wife'}/> Wife
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Daughter'}/> Daughter
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Mother'}/>  Mother
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Father'}/>  Father
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Son'}/>  Son
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Grandmother'}/>  Grandmother
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Grandfather'}/>  Grandfather
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Aunt'}/>   Aunt
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Uncle'}/>   Uncle
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Cousin'}/>  Cousin
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Niece'}/>  Niece
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Nephew'}/>   Nephew
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Neighbour'}/>  Neighbour
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Friend'}/> Friend
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Mentor'}/> Mentor
                                <Form.Check aria-label="Checkbox for following text input" name="close" onChange={handleChange} value={' Mentee'}/> Mentee
                            </Form.Group>
                            <Form.Group controlId="prescription">
                                <Form.Label>2) Do You Support a Prescription-Only Model to Obtain Liquid
                                    Nicotine?: </Form.Label>
                                <Form.Text>
                                    A prescription-only model would mean you must visit a GP for a nicotine prescription
                                    and get it filled by a pharmacy. This could require several trips to the GP a year
                                    and limited availability of nicotine options.
                                </Form.Text>
                                <Form.Check type={'radio'} name="prescription" onChange={handleChange} value={'Yes'} aria-label="Checkbox for following text input"/> Yes
                                <Form.Check type={'radio'} name="prescription" onChange={handleChange} value={'No'} aria-label="Checkbox for following text input"/> No
                            </Form.Group>
                            <Form.Group controlId="story">
                                <Form.Label>3) In detail, please explain why you support vaping: </Form.Label>
                                <Form.Control as="textarea" value={story} name={"story"} onChange={handleChange} rows={3}/>
                            </Form.Group>
                           <Button
                                onClick={click}
                                className={'u-full-width'}
                            >
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default NoSmokerSubmission;




