import React, {Fragment, useState, useEffect} from 'react'

import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";



function App() {


    const [users, setUsers] = useState([]);
    // Create Users
    const createUser = user => {
        setUsers([
            ...users,
            user,
        ])
    }
    return (
        <div className="App" style={{background: '#6a7b8d'}}>
            <header  style={{background: '#e4eaf1'}}>
                <img width={'15%'} src='https://picsum.photos/900/400?random=1' alt='img1'/>
            </header>
            <h1 style={{color: 'white'}}>
                Tell Your Story
            </h1>
            <Home/>
            <RegisterForm createUser={createUser}/>
        </div>
    );
}

export default App;
