import React from 'react';
import s from './App.module.css'
import { InputContainer } from "./components/Input/InputContainer";
import './App.module.css';

const App = () => {
    return (
        <div className={s.App}>
            <span>Enter your e-mail: </span>
            <InputContainer/>
        </div>
    );
}

export default App;
