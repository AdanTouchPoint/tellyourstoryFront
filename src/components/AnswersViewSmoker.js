import React, {Fragment} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/Card";


const AnswersViewSmoker = ({user,dataSmokerSub,smokerAnswers, setShowThankYou,setSmokerAnswers,setHidden,setSmokerSub}) => {
    const { story,prescription, years,quit,products,money,words } = dataSmokerSub
    const { submissionType, name, lastName, age, city, state, cp, email, smoker} = user;

    const click =e => {
        e.preventDefault();
        setShowThankYou(false)
        setSmokerSub(true)
        setHidden(true)
        setSmokerAnswers(true)
    }
    return (
        <Fragment>
            <Container hidden={smokerAnswers}>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>
                        <h2> Review your Answers</h2>
                        <p>
                            Please review your answers carefully before submitting. Once you click send, your submission
                            will be
                            sent on your behalf to the Committee using the information you provided above.
                        </p>
                        <p>
                            Your submission will be laid out as follows
                        </p>
                        <Card body className={"shadow"}>

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
                                This submission is [submissionType].
                                Thank you for the opportunity to provide a submission on this critical issue.
                                My name is {name} {lastName} from {city} {state}. I am {age} and i smoked for {years}.
                                I tried to quit smoking {quit}, using:

                                {products}
                                {products}
                                {products}
But Vaping is the only method that worked for me. I have saved between {money} by switching to vaping
                                I {prescription} support a prescription-only model to obtain liquid nicotine

                                {story}

                                {words}
                                Sincerely,
                                {name} {lastName}
                            </p>
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
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}

export default AnswersViewSmoker;


