import React, {ChangeEvent, useState} from 'react';
import StatusDescription from "../StatusDescription";
import {statusMessage} from './InputContainer.const';
import Input from "./Inlput";
import {checkContainsDash, checkContainsDot, checkValidateEmail, checkZone} from "./InputContainer.helpers";

// возвращает числовое значение - код для обработки ошибок и применения соответствующего стиля
export const validationEmail = (email: string): number => {
    const [userName, hostName] = email.includes('@') ? email.split('@') : [email, ''];
    const hosts: Array<string> = hostName.split('.');
    const isDash = checkContainsDash(hosts[hosts.length - 1] ? hosts.slice(0, -1) : hosts);

    if (!email) return 7;
    if (!userName) return 2;
    if (hosts.length < 2) return 4;
    if (checkValidateEmail(email)) return 1;
    if (checkContainsDot(userName)) return 3;
    if (checkZone(hosts[hosts.length - 1])) return 6;
    if (isDash) return 5;

    return 8;
}

export const InputContainer = () => {
        const [valueInput, setValueInput] = useState<string>('');
        const [inputStyle, setInputStyle] = useState<number>(0);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
            setValueInput(e.currentTarget.value);
        };

        const onBlurHandler = (): void => {
            let email = valueInput.trim();
            setInputStyle(validationEmail(email));
        };

        const onFocusHandler = (): void => {
            setInputStyle(0);
        };

        return (
            <div>
                <Input valueInput={valueInput}
                       inputStyle={inputStyle}
                       onChangeHandler={onChangeHandler}
                       onBlurHandler={onBlurHandler}
                       onFocusHandler={onFocusHandler}
                       name={'inputEmail'}
                />
                <StatusDescription
                    id={'description_id'}
                    message={statusMessage[inputStyle].message}
                    status={statusMessage[inputStyle].status}
                />
            </div>
        );
    }
;
