import React, {Fragment, useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

const cryptoRandomString = require("crypto-random-string");


const SmokerSubmission = ({setDataSmokerSub,smokerSub, setSmokerAnswers,dataSmokerSub}) => {
    const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataSmokerSub.id = randomId;
    const [error, setError] = useState(false)
    const handleChange = e => {
        setDataSmokerSub({
            ...dataSmokerSub,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(dataSmokerSub)
    }
    const { years, quit, products, money, prescription, story, words} = dataSmokerSub;

    const click = e => {
        e.preventDefault();
        if ( years.trim() === '' || quit.trim() === '' ||
            products.trim() === '' || money.trim() === '' || prescription.trim() === '' || story.trim() === '' || words.trim() === '') {
            setError(true)
            return
        }
        setError(false)
     setSmokerAnswers(false)
     console.log(dataSmokerSub)

    }

    return (
        <Fragment>
            <Container hidden={smokerSub}>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>

                        <h2>Create a Submission </h2>
                        {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
                        <Form

                        >
                            <Form.Group controlId="years">
                                <Form.Label>1) How many years did you smoke?</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Choose..."
                                    name="years"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="quit">
                                <Form.Label>2) How many times did you try to quit smoking?</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Choose..."
                                    name="quit"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="products">
                                <Form.Label>3) Which Products Have You Used To Try To Quit Smoking (tick all that
                                    apply):</Form.Label>
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Prescription Medicine (eg Champix)'}/>Prescription Medicine (eg
                                Champix)
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Cold Turkey'}/>Cold Turkey
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Nicotine Patches'}/> Nicotine Patches
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Nicotine Gum'}/> Nicotine Gum
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'CNicotine Sprays'}/> Nicotine Sprays
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Nicotine Lozenges'}/> Nicotine Lozenges
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Hypnotherapy'}/> Hypnotherapy
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Acupuncture'}/> Acupuncture
                                <Form.Check aria-label="Checkbox for following text input" name="products" onChange={handleChange} value={'Mobile App'}/> Mobile App
                            </Form.Group>
                            <Form.Group controlId="money">
                                <Form.Label> 4) How much money did you save on a yearly basis by switching to
                                    vaping?</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="money"
                                    onChange={handleChange}
                                    placeholer={'Choose...'}
                                >
                                    <option>$0 - $2500</option>
                                    <option>$2501 - $5000</option>
                                    <option>$5001 - $7500</option>
                                    <option>$7501 - $10,000</option>
                                    <option>$10,001 - $12,500</option>
                                    <option>$12,500 - $15,000</option>
                                    <option>$15,000 +</option>
                                </Form.Control>

                            </Form.Group>
                            <Form.Group controlId="prescription">
                                <Form.Label>5) Do You Support a Prescription-Only Model to Obtain Liquid Nicotine?: </Form.Label>
                                <Form.Text>
                                    A prescription-only model would mean you must visit a GP for a nicotine prescription
                                    and get it filled by a pharmacy. This could require severalx trips to the GP a year
                                    and limited availability of nicotine options.
                                </Form.Text>
                                <Form.Check type={'radio'} name="prescription" onChange={handleChange} value={'Yes'} aria-label="Checkbox for following text input"/> Yes
                                <Form.Check type={'radio'} name="prescription" onChange={handleChange}  value={'No'} aria-label="Checkbox for following text input"/> No
                            </Form.Group>
                            <Form.Group controlId="story">
                                <Form.Label>6) In detail, please write your personal quit story: </Form.Label>
                                <Form.Control as="textarea" value={story} name={'story'} onChange={handleChange}  rows={3} />
                            </Form.Group>
                            <Form.Group controlId="words">
                                <Form.Label>7) In 10 words or more, what would you do if vaping was regulated as a prescription only product. </Form.Label>
                                <Form.Control as="textarea" onChange={handleChange} value={words}  name={'words'} rows={3} />
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

export default SmokerSubmission;




