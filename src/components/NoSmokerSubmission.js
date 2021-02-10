import React, {Fragment, useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";

const cryptoRandomString = require("crypto-random-string");

const NoSmokerSubmission = ({noSmokerSub, setDataNoSmokerSub, dataNoSmokerSub, setNoSmokerAnswers}) => {
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
                {error ? <p className='alerta-error'>Todos los campos son olbigatorios</p> : null}
                <Form
                    // onSubmit={"/Thankyou"}
                >
                    <Form.Group controlId="close">
                        <Form.Label>1) Who close to you has quit smoking by switching to vaping? (tick all that
                            apply):</Form.Label>
                        <Form.Check name="close" onChange={handleChange} value={' Husband'}/> Husband
                        <Form.Check name="close" onChange={handleChange} value={' Wife'}/> Wife
                        <Form.Check name="close" onChange={handleChange} value={' Daughter'}/> Daughter
                        <Form.Check name="close" onChange={handleChange} value={' Mother'}/> Mother
                        <Form.Check name="close" onChange={handleChange} value={' Father'}/> Father
                        <Form.Check name="close" onChange={handleChange} value={' Son'}/> Son
                        <Form.Check name="close" onChange={handleChange} value={' Grandmother'}/> Grandmother
                        <Form.Check name="close" onChange={handleChange} value={' Grandfather'}/> Grandfather
                        <Form.Check name="close" onChange={handleChange} value={' Aunt'}/> Aunt
                        <Form.Check name="close" onChange={handleChange} value={' Uncle'}/> Uncle
                        <Form.Check name="close" onChange={handleChange} value={' Cousin'}/> Cousin
                        <Form.Check name="close" onChange={handleChange} value={' Niece'}/> Niece
                        <Form.Check name="close" onChange={handleChange} value={' Nephew'}/> Nephew
                        <Form.Check name="close" onChange={handleChange} value={' Neighbour'}/> Neighbour
                        <Form.Check name="close" onChange={handleChange} value={' Friend'}/> Friend
                        <Form.Check name="close" onChange={handleChange} value={' Mentor'}/> Mentor
                        <Form.Check name="close" onChange={handleChange} value={' Mentee'}/> Mentee
                    </Form.Group>
                    <Form.Group controlId="prescription">
                        <Form.Label>2) Do You Support a Prescription-Only Model to Obtain Liquid
                            Nicotine?: </Form.Label>
                        <Form.Text>
                            A prescription-only model would mean you must visit a GP for a nicotine prescription
                            and get it filled by a pharmacy. This could require several trips to the GP a year
                            and limited availability of nicotine options.
                        </Form.Text>
                        <Form.Check type={'radio'} name="prescription" onChange={handleRadios} value={'Yes'}
                                    aria-label="Checkbox for following text input"/> Yes
                        <Form.Check type={'radio'} name="prescription" onChange={handleRadios} value={'No'}
                                    aria-label="Checkbox for following text input"/> No
                    </Form.Group>
                    <Form.Group controlId="story">
                        <Form.Label>3) In detail, please explain why you support vaping: </Form.Label>
                        <Form.Control as="textarea" value={story} name={"story"} onChange={handleText}
                                      rows={3}/>
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




