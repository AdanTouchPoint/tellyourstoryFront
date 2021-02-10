import React, {Fragment, useState, useEffect} from 'react'
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import SmokerSubmission from "./components/SmokerSubmission";
import NoSmokerSubmission from "./components/NoSmokerSubmission";
import AnswersView from "./components/AnswersView";
import AnswersViewSmoker from "./components/AnswersViewSmoker";
import ThankYou from "./components/ThankYou";
import Footer from './components/Footer'

function App() {

    const [user, setUser] = useState({
        submissionType: '',
        name: '',
        lastName: '',
        age: '',
        city: '',
        state: '',
        cp: '',
        email: '',
        id: '',
        smoker: ''
    });
    const [dataNoSmokerSub, setDataNoSmokerSub] = useState({
        close: '',
        prescription: '',
        story: '',
        id: ''
    });
    const [dataSmokerSub, setDataSmokerSub] = useState({
        years: '',
        quit: '',
        products: "",
        money: '',
        prescription: '',
        story: '',
        words: '',
        id: ''
    });
    const [hidden, setHidden] = useState(true)
    const [smokerSub, setSmokerSub] = useState(true)
    const [noSmokerSub, setNoSmokerSub] = useState(true)
    const [noSmokerAnswers, setNoSmokerAnswers] = useState(true)
    const [smokerAnswers, setSmokerAnswers] = useState(true)
    const [showThankYou, setShowThankYou] = useState(true)
    return (
        <div style={{display:'flex', flexDirection: 'column', height:'100vh' }} >
            <header style={{background: '#e4eaf1'}}>
                <img width={'15%'} src='../public/legalise-vaping-logo.png' alt='img1'/>
            </header>
            <div style={{background: '#6a7b8d', flex:'1'}}>
            <h1 style={{color: 'white'}}>
                Tell Your Story
            </h1>
            <Home
                user={user}
                setUser={setUser}
                hidden={hidden}
                setHidden={setHidden}
            />
            <RegisterForm
                user={user}
                setUser={setUser}
                hidden={hidden}
                setHidden={setHidden}
                smokerSub={smokerSub}
                setSmokerSub={setSmokerSub}
                setNoSmokerSub={setNoSmokerSub}
            />
            <SmokerSubmission
                user={user}
                smokerSub={smokerSub}
                dataSmokerSub={dataSmokerSub}
                setDataSmokerSub={setDataSmokerSub}
                setSmokerAnswers={setSmokerAnswers}
            />
            <NoSmokerSubmission
                user={user}
                noSmokerSub={noSmokerSub}
                setDataNoSmokerSub={setDataNoSmokerSub}
                dataNoSmokerSub={dataNoSmokerSub}
                setNoSmokerAnswers={setNoSmokerAnswers}
            />
            <AnswersViewSmoker
                user={user}
                dataSmokerSub={dataSmokerSub}
                smokerAnswers={smokerAnswers}
                setShowThankYou={setShowThankYou}
                setSmokerSub={setSmokerSub}
                setHidden={setHidden}
                setSmokerAnswers={setSmokerAnswers}
            />
            <AnswersView
                user={user}
                dataNoSmokerSub={dataNoSmokerSub}
                noSmokerAnswers={noSmokerAnswers}
                setShowThankYou={setShowThankYou}
                setNoSmokerSub={setNoSmokerSub}
                setHidden={setHidden}
                setNoSmokerAnswers={setNoSmokerAnswers}
            />
            <ThankYou
                showThankYou={showThankYou}/>
            </div>
        <Footer />

        </div>

    );
}

export default App;
