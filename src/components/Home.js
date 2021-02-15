import React, {Fragment, useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = ({user, setUser,hidden, setHidden}) => {
    const handleClick = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setHidden( false
         )
        scroll.scrollToBottom();
        console.log(e.target.value)
        console.log(user)
        console.log(hidden)
    }
    return (
        <Fragment>
            <Container className={"containerText"}>
                <Row>
                    <Col>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={500}
                        >

                        </Link>
                        <h2> Using this platform you can write and send your submission to the Select Committee on
                            Tobacco Harm
                            Reduction. Make your voice heard!</h2>
                        <p>The Senate Select Committee on Tobacco Harm Reduction is now accepting submissions, giving
                            vapers the
                            opportunity for their voices to be heard.</p>

                        <p> We have created a portal to help you make a submission. If you would like to tell the
                            Committee your
                            story, fill out the form below and follow the prompts; the portal will compile your answers
                            into a
                            submission and send it to the Committee Secretariat.</p>

                        <p> If you would like to make your own submission or if you experience any difficulties with
                            this form,
                            you can write your personal story and what vaping means to you, and send it to:
                            tobaccoharmreduction.sen@aph.gov.au.. Be sure to read the criteria for submitting a petition
                            on the
                            Committee website.</p>

                        <p> If possible, please do not use Internet Explorer to complete the survey.</p>
                    </Col>
                </Row>
                <Row className={"Button1"}>
                    <Col xs={6} xl={6}>
                        <Button onClick={handleClick} size={"lg"} name={ 'smoker'} value = {'1'} variant="primary">Im quit smoking by vaping</Button>
                    </Col>
                    <Col className={"Button2"} xs={6}>
                        <Button size={'lg'} onClick={handleClick} size={"lg"} name={ 'smoker'} value = {'2'} variant="info">I don´t vape, but am a supporter</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home;