import {ChangeEvent} from "react";
import {statusMessage} from "./InputContainer.const";

export type MessageType = {
    codeStatus: number,
    message: string,
    status: string,
};

export type StatusDescriptionPropsType = {
    id:string,
    message: string,
    status: string,
}

export type InputPropsType = {
    valueInput: string,
    inputStyle: number,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlurHandler: () => void,
    onFocusHandler: () => void,
    name: string,
};