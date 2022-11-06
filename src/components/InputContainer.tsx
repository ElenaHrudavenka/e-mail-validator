import React, {ChangeEvent, useState} from 'react';
import s from './InputContainer.module.css'

const InputContainer = () => {
    const [value, setValue] = useState('');
    const [inputStyle, setInputStyle] = useState<number>(0);

    // функция валидации e-mail
    const isValidateEmail = (email: string): boolean => {
        let patternEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return patternEmail.test(email.toLowerCase())
    }

    // дефисы в домене
    const containDash = (hostName: string) => {
        let domain = hostName.substring(0, hostName.indexOf('.'))
        let lastCharacter = domain.length-1;
        return domain[0] === '-' || domain[lastCharacter] === '-'
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const onBlurHandler = () => {
        let email: string = value.trim();
        const [userName, hostName]: Array<string> = email.split('@');
        if (containDash(hostName)) {
            setInputStyle(4)
        } else if (!isValidateEmail(email)) {
            !userName && setInputStyle(2);
            !hostName && setInputStyle(3);
            hostName && !hostName.includes('.') && setInputStyle(5);
        } else {
            setInputStyle(1);
        }
    }

    const onFocusHandler = () => {
        setInputStyle(0);
    }

    return (
        <div className={s.inputBlock}>
            <input value={value}
                   type="text"
                   placeholder='input your e-mail'
                   className={inputStyle > 1 ? s.validationError : s.validationSuccess}
                   onChange={onChangeHandler}
                   onBlur={onBlurHandler}
                   onFocus={onFocusHandler}
            />
            {inputStyle === 1 && <span data-descr-success={"Your e-mail is received!"}> </span>}
            {inputStyle === 2 && <span data-descr={"User name not entered!"}> </span>}
            {inputStyle === 3 && <span data-descr={"Domain name not entered!"}> </span>}
            {inputStyle === 4 && <span data-descr={"Don't use dash at the beginning or end of a domain!"}> </span>}
            {inputStyle === 5 && <span data-descr={"Domain zone not entered!"}> </span>}
        </div>
    );
};

export default InputContainer;