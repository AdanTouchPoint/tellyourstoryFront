import React from 'react'
import Button from "react-bootstrap/cjs/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios'

const AnswersView = ({allDataIn,noSmokerAnswers, dataNoSmokerSub, user, setShowThankYou, setNoSmokerSub, setHidden, setNoSmokerAnswers}) => {
    const {personalStory, prescriptionSupport} = dataNoSmokerSub
    const {submissionType, firstName, lastName, age, city, state, cp, email, smoker} = user;
   dataNoSmokerSub.relatives = allDataIn.toString()
    const click = async e => {
        e.preventDefault();
        setShowThankYou(false)
        setNoSmokerSub(true)
        setHidden(true)
        setNoSmokerAnswers(true)
        console.log(user)
        await axios.post(`https://sendemail-service.herokuapp.com/send-email`, {user,allDataIn,dataNoSmokerSub}).then((resultOk) => {
        })
    }
    return (
        <div hidden={noSmokerAnswers} className={'container'} style={{justifyContent: 'center', display: 'flex'}}>
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
                        SUBJECT:{submissionType} - {firstName} {lastName} submission to the Tobacco Harm
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
                        My name is {firstName} {lastName} from {city} {state}. My:

                    </p>
                    <p>
                           {allDataIn.map( (product,index)  =>   <li key={index}>{product}</li>)}
                           {console.log(allDataIn)}
                       </p>
                    <p>
                        quit smoking by switching to vaping.
                        I {prescriptionSupport} support a prescription-only model to obtain liquid nicotine
                        The reason I support Vaping is below
                        {personalStory}
                        Sincerely,
                        {firstName} {lastName}
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
            </div>
        </div>
    )
}

export default AnswersView;


