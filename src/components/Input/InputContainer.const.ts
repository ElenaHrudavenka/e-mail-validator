import {MessageType} from "./InputContainer.type";

export const statusMessage: Array<MessageType> = [
    {
        codeStatus: 0,
        message: '',
        status: 'none',
    },
    {
        codeStatus: 1,
        message: 'Your e-mail is received!',
        status: 'success',
    },
    {
        codeStatus: 2,
        message: 'User name not entered!',
        status: 'error',
    },
    {
        codeStatus: 3,
        message: 'Don\'t use dot at the beginning or end of your user name! Don\'t use more than one dot in a row!',
        status: 'error',
    },
    {
        codeStatus: 4,
        message: 'The email should be userName@hostName. Host must contain domain name and zone (separator is dot)!',
        status: 'error',
    },
    {
        codeStatus: 5,
        message: 'Don\'t use dash at the beginning or end of your domain name! Don\'t use more than one dash in a row!',
        status: 'error',
    },
    {
        codeStatus: 6,
        message: 'Domain zone not entered or consist errors!',
        status: 'error',
    },
    {
        codeStatus: 7,
        message: 'Field e-mail can\'t be empty!',
        status: 'error',
    },
    {
        codeStatus: 8,
        message: 'Field e-mail can\'t contain spaces or some special symbols. Also, the domain must not exceed 63 characters!',
        status: 'error',
    },
]
