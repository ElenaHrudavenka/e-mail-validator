import React, {ChangeEvent, useState} from 'react';
import s from './InputContainer.module.css'

const InputContainer = () => {
    const [value, setValue] = useState('');
    const [inputStyle, setInputStyle] = useState<number>(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const onBlurHandler = () => {
        const [userName, hostName] = value.includes('@', 1) ? value.split('@') : ['', ''];

        if (userName === '' || hostName === '') {
            setInputStyle(1);
        } else {
            setInputStyle(0);
            //alert(`${userName} @ ${hostName}`)
        }

    }
    return (
        <div className={s.inputBlock}>
            <input value={value}
                   type="text"
                   placeholder='input your e-mail'
                   className={inputStyle ? s.validationError : ''}
                   onChange={onChangeHandler}
                   onBlur={onBlurHandler}
            />
            {inputStyle === 1 && <span data-descr={"User name or domain name not entered!"}></span>}
        </div>
    );
};

export default InputContainer;