import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from 'react-bootstrap/Alert'

const cryptoRandomString = require("crypto-random-string");

const SmokerSubmission = ({setDataSmokerSub, smokerSub, setSmokerAnswers, dataSmokerSub}) => {
    const [validated, setValidated] = useState(false)
    const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataSmokerSub.id = randomId;
    const [productsData, setProductsData] = useState([])
    const [error, setError] = useState(false)
    const handleChange = e => {
        setProductsData([
            ...productsData,
            e.target.value
        ])
        setDataSmokerSub({
            ...dataSmokerSub,
            [e.target.name]: [
                ...productsData,
                e.target.value].join(',')
        })
        console.log(e.target.value)
    }
    const handleText = e => {
        setDataSmokerSub({
            ...dataSmokerSub,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    useEffect(() => {
        console.log(dataSmokerSub)
    }, [dataSmokerSub])
    const {years, quit, products, money, prescription, story, words} = dataSmokerSub;
    const click = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (years.trim() === '' || quit.trim() === '' ||
            products.trim() === '' || money.trim() === '' || prescription.trim() === '' || story.trim() === '' || words.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setSmokerAnswers(false)
        console.log(dataSmokerSub)

    }
    return (
        <div hidden={smokerSub} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h2>Create a Submission </h2>
                {error ? <Alert variant={'danger'}>
                    All fields are required!
                </Alert> : null}
                <Form noValidate validated={validated}>
                    <Form.Group controlId="years">
                        <Form.Label>1) How many years did you smoke?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Choose..."
                            name="years"
                            onChange={handleText}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="quit">
                        <Form.Label>2) How many times did you try to quit smoking?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Choose..."
                            name="quit"
                            onChange={handleText}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="products">
                        <Form.Label>3) Which Products Have You Used To Try To Quit Smoking (tick all that
                            apply):</Form.Label>
                        <Form.Check
                            style={{padding: '3px'}}
                            label={'Prescription Medicine (eg Champix)'}
                            name="products"
                            onChange={handleChange}
                            value={'Prescription Medicine (eg Champix)'}/>
                        <Form.Check
                            style={{padding: '3px'}}
                            name="products"
                            onChange={handleChange}
                            label={"Cold Turkey"}
                            value={'Cold Turkey'}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Nicotine Patches'}
                            label={" Nicotine Patches"}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Nicotine Gum'}
                            label={"Nicotine Gum"}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Nicotine Sprays'}
                            label={'Nicotine Sprays'}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Nicotine Lozenges'}
                            label={'Nicotine Lozenges'}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Hypnotherapy'}
                            label={'Hypnotherapy'}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Acupuncture'}
                            label={'Acupuncture'}
                            style={{padding: '3px'}}
                        />
                        <Form.Check
                            name="products"
                            onChange={handleChange}
                            value={'Mobile App'}
                            label={'Mobile App'}
                            style={{padding: '3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="money">
                        <Form.Label> 4) How much money did you save on a yearly basis by switching to
                            vaping?</Form.Label>
                        <Form.Control
                            as="select"
                            name="money"
                            onChange={handleText}
                            placeholer={'Choose...'}
                            required
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
                        <Form.Label>5) Do You Support a Prescription-Only Model to Obtain Liquid
                            Nicotine?: </Form.Label>
                        <Form.Text>
                            A prescription-only model would mean you must visit a GP for a nicotine prescription
                            and get it filled by a pharmacy. This could require severalx trips to the GP a year
                            and limited availability of nicotine options.
                        </Form.Text>
                        <Form.Check
                            type={'radio'}
                            name="prescription"
                            onChange={handleText}
                            value={'Yes'}
                            label={'Yes'}
                        />
                        <Form.Check
                            type={'radio'}
                            name="prescription"
                            onChange={handleText}
                            value={'No'}
                            label={'No'}
                        />
                    </Form.Group>
                    <Form.Group controlId="story">
                        <Form.Label>6) In detail, please write your personal quit story: </Form.Label>
                        <Form.Control required as="textarea" value={story} name={'story'} onChange={handleText}
                                      rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="words">
                        <Form.Label>7) In 10 words or more, what would you do if vaping was regulated as a prescription
                            only product. </Form.Label>
                        <Form.Control required as="textarea" onChange={handleText} value={words} name={'words'}
                                      rows={3}/>
                    </Form.Group>
                    <Button
                        onClick={click}
                    >
                        Next
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SmokerSubmission;




