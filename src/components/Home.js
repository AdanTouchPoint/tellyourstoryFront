import React, {Fragment} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";


const Home = () => {


    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={6}
                         className={"container"}>

                <h2>  Using this platform you can write and send your submission to the Select Committee on Tobacco Harm
                        Reduction. Make your voice heard!</h2>
                <p>The Senate Select Committee on Tobacco Harm Reduction is now accepting submissions, giving vapers the
                    opportunity for their voices to be heard.</p>

                <p> We have created a portal to help you make a submission. If you would like to tell the Committee your
                    story, fill out the form below and follow the prompts; the portal will compile your answers into a
                    submission and send it to the Committee Secretariat.</p>

                <p> If you would like to make your own submission or if you experience any difficulties with this form,
                    you can write your personal story and what vaping means to you, and send it to:
                    tobaccoharmreduction.sen@aph.gov.au.. Be sure to read the criteria for submitting a petition on the
                    Committee website.</p>

                <p> If possible, please do not use Internet Explorer to complete the survey.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Button variant="primary">Im quit smoking by vaping</Button>
                    </Col>
                    <Col xs={6}>
                <Button variant="info"  >I don´t vape, but am a supporter</Button>{' '}

                </Col>
            </Row>
        </Container>
        </Fragment>

    )
}

export default Home;