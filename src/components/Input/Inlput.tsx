import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";
import {InputPropsType} from './InputContainer.type';

const Input: React.FC<InputPropsType> = ({
                                             valueInput,
                                             inputStyle,
                                             onChangeHandler,
                                             onBlurHandler,
                                             onFocusHandler,
                                             name,
                                         }) => {
    return (
        <div className={s.inputBlock}>
            <input value={valueInput}
                   type="text"
                   placeholder='input your e-mail'
                   className={inputStyle > 1
                       ? s.validationError
                       : s.validationSuccess}
                   onChange={onChangeHandler}
                   onBlur={onBlurHandler}
                   onFocus={onFocusHandler}
            />
        </div>
    );
};

export default Input;