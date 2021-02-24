import React, {Fragment, useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const AnswersViewSmoker = ({allDataIn, user, setDataSmokerSub, dataSmokerSub, smokerAnswers, setShowThankYou, setSmokerAnswers, setHidden, setSmokerSub}) => {
    const {story, prescription, years, tries, money, words} = dataSmokerSub
    const {submissionType, name, lastName, age, city, state, cp, email, smoker} = user;
        const click = async e => {
        e.preventDefault();
        setShowThankYou(false)
        setSmokerSub(true)
        setHidden(true)
        setSmokerAnswers(true)
        console.log()
        await axios.post(`http://localhost:8080/send-email`, {user, dataSmokerSub,allDataIn}).then((resultOk) => {
        })
    }
    return (
        <div hidden={smokerAnswers} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h2> Review your Answers</h2>
                <p>
                    Please review your answers carefully before submitting. Once you click send, your submission
                    will be
                    sent on your behalf to the Committee using the information you provided above.
                </p>
                <p>
                    Your submission will be laid out as follows
                </p>
                <Card body>
                    <p>
                        SUBJECT:{submissionType} - {name} {lastName} submission to the Tobacco Harm
                        Reduction Commitee
                    </p>
                    <p>
                        Department of the Senate
                        Select Commitee on Tobacco Harm Reducction
                        PO Box 6100
                        Parliament House
                        Canberra ACT 2600
                    </p>
                    <p>
                        Dear Commitee,
                        This submission is {submissionType}.
                        Thank you for the opportunity to provide a submission on this critical issue.
                        My name is {name} {lastName} from {city} {state}. I am {age} and i smoked for {years}.
                        I tried to quit smoking {tries}, using:
                    </p>
                    <p>
                        {allDataIn.map((product, index) => <li key={index}>{product}</li>)}
                        {console.log(allDataIn)}
                    </p>
                    But Vaping is the only method that worked for me. I have saved between {money} by
                    switching to vaping
                    I {prescription} support a prescription-only model to obtain liquid nicotine
                    <p>
                        {story}
                    </p>
                    <p>{words}</p>
                    Sincerely,
                    <p>{name} {lastName}</p>

                </Card>
                <p>
                    If you are happy with your submission, click "Send Now" below
                </p>
                <Button
                    onClick={click}
                    className={'u-full-width'}
                >
                    Send Now!
                </Button>
            </div>
        </div>
    )
}

export default AnswersViewSmoker;


