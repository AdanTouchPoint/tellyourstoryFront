import React, {Fragment, useEffect, useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import {Link, animateScroll as scroll} from "react-scroll";

const Home = ({user, setUser, hidden, setHidden}) => {
    const handleClick = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setHidden(false
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
                        <h2> Give your stakeholders a voice by making it easy for them to build and send submissions to
                            relevant government committees.
                        </h2>
                        <p>This platform was created to allow users to easily send committee petitions that would
                            otherwise be complicated or intimidating by asking them a series of questions and building
                            an email using their answers. Once they’ve answered our questions, their submission will be
                            sent in the form of an email to the relevant committee email, arriving as if it had been
                            sent from the user’s personal email.</p>

                        <p> Note: This version of the system uses our “Email Gold” service that allows emails to be sent
                            from our platforms that appear as if they were sent from a user’s personal email. A simpler
                            version of the program gives users a copy/paste-ready email address, subject line, and email
                            that they can then send from their personal accounts.
                        </p>


                    </Col>
                </Row>
                <Row className={"Button1"}>
                    <Col xs={6} xl={6}>
                        <Button onClick={handleClick} size={"lg"} name={'smoker'} value={'1'} variant="primary">Im quit
                            smoking by vaping</Button>
                    </Col>
                    <Col className={"Button2"} xs={6}>
                        <Button size={'lg'} onClick={handleClick} size={"lg"} name={'smoker'} value={'2'}
                                variant="info">I don´t vape, but am a supporter</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home;