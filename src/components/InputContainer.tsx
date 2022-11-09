import React, {ChangeEvent, useState} from 'react';
import s from './InputContainer.module.css'

const InputContainer = () => {
    const [valueInput, setValueInput] = useState('');
    const [inputStyle, setInputStyle] = useState<number>(0);

    // функция валидации e-mail (вернет true если значение прошло валидацию)
    const isValidateEmail = (email: string): boolean => {
        const patternEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
        return patternEmail.test(email)
    };

    // дефисы в домене (вернет true если дефис содржится в начале и конце строки или идет более двух подряд)
    const isContainDash = (hosts: Array<string>) => {
        const patternDomain = /^(?![-]|.*[-]$)(?=[^-]*[-]?[^-]*$).{1,63}$/iu;
        let i = 0, contain = false;
        while (i < hosts.length) {
            if (!patternDomain.test(hosts[i])) {
                contain = true;
                break
            }
            i++;
        }
        return contain;
    };
// доменная зона (true если есть ошибка валидации)
    const isErrorZone = (hostZone: string): boolean => {
        const patternZone = /(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])/iu;
        //alert(`host: ${hostZone} result: ${patternZone.test(hostZone)}`)
        return !patternZone.test(hostZone);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value);
    };

    const onBlurHandler = () => {
        let email: string = valueInput.trim();
        const [userName, hostName] = email.includes('@') ? email.split('@') : [email, ''];
        const hosts: Array<string> = hostName.split('.');
        !userName && setInputStyle(2);
        !hostName.includes('.') && setInputStyle(3);
        if (isValidateEmail(email)) {
            setInputStyle(1);
        } else {
           isErrorZone(hosts[hosts.length - 1]) && setInputStyle(5);
           hosts[hosts.length - 1]
               ? isContainDash(hosts.slice(0,-1)) && setInputStyle(4)
               : isContainDash(hosts) &&setInputStyle(4);
        }
    };

    const onFocusHandler = () => {
        setInputStyle(0);
    };

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
            {inputStyle === 1 && <span data-descr-success={"Your e-mail is received!"}> </span>}
            {inputStyle === 2 && <span data-descr={"User name not entered!"}> </span>}
            {inputStyle === 3 && <span data-descr={"Host name must contain domain name and zone!"}> </span>}
            {inputStyle === 4 && <span
                data-descr={"Don't use dash at the beginning or end of your domain name! Don't use more than one dash in a row!"}> </span>}
            {inputStyle === 5 && <span data-descr={"Domain zone not entered or consist errors!"}> </span>}
        </div>
    );
};

export default InputContainer;