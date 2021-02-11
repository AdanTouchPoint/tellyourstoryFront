import React, {Fragment, useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";

const cryptoRandomString = require("crypto-random-string");

const NoSmokerSubmission = ({noSmokerSub, setDataNoSmokerSub, dataNoSmokerSub, setNoSmokerAnswers}) => {
    const [validated, setValidated] = useState(false);
    const randomId = cryptoRandomString({type: 'distinguishable', length: 10})
    dataNoSmokerSub.id = randomId;
    const [error, setError] = useState(false)
    const [closeRelatives, setCloseRelatives] = useState([])
    const [radiosData, setRadiosData] = useState([])
    const handleChange = e => {
        setCloseRelatives([
            ...closeRelatives,
            e.target.value
        ])
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: [
                ...closeRelatives,
                e.target.value].join(',')
        })
        console.log(e.target.value)
    }
    const handleRadios = e => {
        setRadiosData([
            ...radiosData,
            e.target.value
        ])
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: [
                ...radiosData,
                e.target.value].join(',')
        })
        console.log(e.target.value)
    }
    const handleText = e => {
        setDataNoSmokerSub({
            ...dataNoSmokerSub,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    useEffect(() => {
        console.log(dataNoSmokerSub)
    }, [dataNoSmokerSub])
    const {close, prescription, story} = dataNoSmokerSub;
    const click = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (close.trim() === '' || prescription.trim() === '' || story.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        console.log(dataNoSmokerSub)
        setNoSmokerAnswers(false)
    }
    return (
        <div hidden={noSmokerSub} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h2>Create a Submission </h2>
                {error ? <Alert variant={'danger'}>
                    All fields are required!
                </Alert> : null}
                <Form noValidate validated={validated}>
                    <Form.Group controlId="close">
                        <Form.Label>1) Who close to you has quit smoking by switching to vaping? (tick all that
                            apply):</Form.Label>
                        <Form.Check
                            name="close" onChange={handleChange} value={' Husband'} label={' Husband'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Wife'} label={' Wife'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Daughter'} label={' Daughter'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Mother'} label={' Mother'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Father'} label={' Father'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Son'} label={' Son'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Grandmother'} label={' Grandmother'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Grandfather'} label={' Grandfather'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Aunt'} label={' Aunt'} style={{padding:'3px'}} />
                        <Form.Check name="close" onChange={handleChange} value={' Uncle'} label={' Uncle'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Cousin'} label={' Cousin'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Niece'} label={' Niece'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Nephew'} label={' Nephew'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Neighbour'} label={' Neighbour'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Friend'} label={' Friend'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Mentor'} label={' Mentor'} style={{padding:'3px'}}/>
                        <Form.Check name="close" onChange={handleChange} value={' Mentee'} label={' Mentee'} style={{padding:'3px'}}/>
                    </Form.Group>
                    <Form.Group controlId="prescription">
                        <Form.Label>2) Do You Support a Prescription-Only Model to Obtain Liquid
                            Nicotine?: </Form.Label>
                        <Form.Text>
                            A prescription-only model would mean you must visit a GP for a nicotine prescription
                            and get it filled by a pharmacy. This could require several trips to the GP a year
                            and limited availability of nicotine options.
                        </Form.Text>
                        <Form.Check type={'radio'} name="prescription" onChange={handleRadios} value={'Yes'} label={'Yes'}
                                    aria-label="Checkbox for following text input"/>
                        <Form.Check type={'radio'} name="prescription" onChange={handleRadios} value={'No'} label={'No'}
                                    aria-label="Checkbox for following text input"/>
                    </Form.Group>
                    <Form.Group controlId="story">
                        <Form.Label>3) In detail, please explain why you support vaping: </Form.Label>
                        <Form.Control as="textarea" value={story} name={"story"} onChange={handleText}
                                      required rows={3}/>
                    </Form.Group>
                    <Button
                        onClick={click}
                        className={'u-full-width'}
                    >
                        Next
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NoSmokerSubmission;




