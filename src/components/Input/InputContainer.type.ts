import {ChangeEvent} from "react";

export type MessageType = {
    codeStatus: number,
    message: string,
    status: string,
};

export type InputPropsType = {
    valueInput: string,
    inputStyle: number,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlurHandler: () => void,
    onFocusHandler: () => void,
};