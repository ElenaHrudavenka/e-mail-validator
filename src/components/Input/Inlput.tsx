import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";

type InputPropsType = {
    valueInput: string,
    inputStyle: number,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>void,
    onBlurHandler: ()=>void,
    onFocusHandler: ()=>void,
}

const Input: React.FC<InputPropsType> = ({
                             valueInput,
                             inputStyle,
                             onChangeHandler,
                             onBlurHandler,
                             onFocusHandler,
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