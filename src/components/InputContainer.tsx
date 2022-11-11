import React, {ChangeEvent, useState} from 'react';
import s from './InputContainer.module.css'
import StatusDescription from "./StatusDescription";

type MessageType = {
    codeStatus: number,
    message: string,
    status: string,
};

const InputContainer = () => {
    const statusMessage: Array<MessageType> = [
        {codeStatus: 0, message: '', status: 'none',},
        {codeStatus: 1, message: 'Your e-mail is received!', status: 'success',},
        {codeStatus: 2, message: 'User name not entered!', status: 'error',},
        {
            codeStatus: 3,
            message: 'Don\'t use dot at the beginning or end of your user name! Don\'t use more than one dot in a row!',
            status: 'error',
        },
        {codeStatus: 4, message: 'Host name must contain domain name and zone!', status: 'error',},
        {
            codeStatus: 5,
            message: 'Don\'t use dash at the beginning or end of your domain name! Don\'t use more than one dash in a row!',
            status: 'error',
        },
        {codeStatus: 6, message: 'Domain zone not entered or consist errors', status: 'error',},
        {codeStatus: 7, message: '', status: 'error',},
    ]

    const [valueInput, setValueInput] = useState('');
    const [inputStyle, setInputStyle] = useState<number>(0);

    // функция валидации e-mail (вернет true если значение прошло валидацию)
    const isValidateEmail = (email: string): boolean => {
        const patternEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]((?=[^-]*[-]?[^-]*$)[-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
        return patternEmail.test(email)
    };

    // дефисы в домене (вернет true если дефис содржится в начале и конце строки или идет более двух подряд)
    const isContainDash = (hosts: Array<string>): boolean => {
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

    // точки в имени (вернет true если точка содржится в начале и конце строки или идет более двух подряд)
    const isContainDot = (userName: string): boolean => {
        const patternUserName = /^(?![.]|.*[.]$)(?=[^.]*[.]?[^.]*$).{1,63}$/iu;
        return !patternUserName.test(userName);
    };

// доменная зона (вернет true если есть ошибка валидации)
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
        !hostName.includes('.') && setInputStyle(4);
        if (isValidateEmail(email)) {
            setInputStyle(1);
        } else {
            if (isContainDot(userName)) {
                alert(isContainDot(userName))
                setInputStyle(3);
            } else if (isErrorZone(hosts[hosts.length - 1])) {
                setInputStyle(6);
            } else {
                hosts[hosts.length - 1]
                    ? isContainDash(hosts.slice(0, -1)) && setInputStyle(5)
                    : isContainDash(hosts) && setInputStyle(5);
            }
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
            <StatusDescription status={statusMessage[inputStyle].status}
                               message={statusMessage[inputStyle].message}
            />
        </div>
    );
};

export default InputContainer;