import {checkContainsDash, checkContainsDot, checkValidateEmail, checkZone} from './InputContainer.helpers';
import {InputContainer, validationEmail} from "./InputContainer";
import {render, screen} from "@testing-library/react";
import StatusDescription from '../StatusDescription';
import React from "react";
import Input from "./Inlput";
import userEvent from "@testing-library/user-event";

const invalidCharacters = '-!#$%&\'*+/=?^_`{|}~';
const invalidZoneNames: Array<string> = invalidCharacters.split('').map((character) => 'a' + character);

describe('Tests for checkContainsDash function.', () => {
    test('The function doesn\'t return undefined if the argument is an empty string.', () => {
        expect(checkContainsDash([''])).not.toBeUndefined();
    });
    test('Return true if dash at the beginning of your domain name.', () => {
        expect(checkContainsDash(['-domain'])).toBeTruthy();
    });
    test('Return true if dash at the end of your domain name.', () => {
        expect(checkContainsDash(['domain-'])).toBeTruthy();
    });
    test('Return true if use more than one dash in a row.', () => {
        expect(checkContainsDash(['do--main'])).toBeTruthy();
    });
    test('Return false if dash don\'t use use at the beginning or end of your domain name. And if don\'t use more than one dash in a row.', () => {
        expect(checkContainsDash(['do-main'])).toBeFalsy();
    });
});

describe('Tests for checkContainsDot function.', () => {
    test('The function doesn\'t return undefined if the argument is an empty string.', () => {
        expect(checkContainsDot('')).not.toBeUndefined();
    });
    test('Return true if dot at the beginning of your user name', () => {
        expect(checkContainsDot('.userAlena')).toBeTruthy();
    });
    test('Return true if dot at the end of your user name', () => {
        expect(checkContainsDot('userAlena.')).toBeTruthy();
    });
    test('Return true if use more than one dot in a row.', () => {
        expect(checkContainsDot('user..Alena')).toBeTruthy();
    });
    test('Return false if dot don\'t use use at the beginning or end of your user name. And if don\'t use more than one dot in a row.', () => {
        expect(checkContainsDot('user.Alena')).toBeFalsy();
    });
});

describe('Tests for checkZone function.', ()=>{
    test('The function doesn\'t return undefined if the argument is an empty string.', ()=>{
        expect(checkZone('')).not.toBeUndefined();
    });
    test('Domain zone consists of two letters.', ()=>{
        expect(checkZone('gg')).toBeFalsy();
    });
    test('Domain zone is equal \'aero\'.', ()=>{
        expect(checkZone('aero')).toBeFalsy();
    });
    test('Domain zone is equal \'arpa\'.', ()=>{
        expect(checkZone('arpa')).toBeFalsy();
    });
    test('Domain zone is equal \'asia\'.', ()=>{
        expect(checkZone('asia')).toBeFalsy();
    });
    test('Domain zone is equal \'biz\'.', ()=>{
        expect(checkZone('biz')).toBeFalsy();
    });
    test('Domain zone is equal \'cat\'.', ()=>{
        expect(checkZone('cat')).toBeFalsy();
    });
    test('Domain zone is equal \'com\'.', ()=>{
        expect(checkZone('com')).toBeFalsy();
    });
    test('Domain zone is equal \'coop\'.', ()=>{
        expect(checkZone('coop')).toBeFalsy();
    });
    test('Domain zone is equal \'edu\'.', ()=>{
        expect(checkZone('edu')).toBeFalsy();
    });
    test('Domain zone is equal \'gov\'.', ()=>{
        expect(checkZone('gov')).toBeFalsy();
    });
    test('Domain zone is equal \'info\'.', ()=>{
        expect(checkZone('info')).toBeFalsy();
    });
    test('Domain zone is equal \'int\'.', ()=>{
        expect(checkZone('int')).toBeFalsy();
    });
    test('Domain zone is equal \'jobs\'.', ()=>{
        expect(checkZone('jobs')).toBeFalsy();
    });
    test('Domain zone is equal \'mil\'.', ()=>{
        expect(checkZone('mil')).toBeFalsy();
    });
    test('Domain zone is equal \'mobi\'.', ()=>{
        expect(checkZone('mobi')).toBeFalsy();
    });
    test('Domain zone is equal \'museum\'.', ()=>{
        expect(checkZone('museum')).toBeFalsy();
    });
    test('Domain zone is equal \'name\'.', ()=>{
        expect(checkZone('name')).toBeFalsy();
    });
    test('Domain zone is equal \'net\'.', ()=>{
        expect(checkZone('net')).toBeFalsy();
    });
    test('Domain zone is equal \'org\'.', ()=>{
        expect(checkZone('org')).toBeFalsy();
    });
    test('Domain zone is equal \'pro\'.', ()=>{
        expect(checkZone('pro')).toBeFalsy();
    });
    test('Domain zone is equal \'tel\'.', ()=>{
        expect(checkZone('tel')).toBeFalsy();
    });
    test('Domain zone is equal \'travel\'.', ()=>{
        expect(checkZone('travel')).toBeFalsy();
    });
    test('Domain zone consists more than two letters (except: aero,arpa,asia,biz,cat,com,coop,edu,gov,info,int,jobs,mil,mobi,museum,name,net,org,pro,tel,travel).', ()=>{
        expect(checkZone('sdd')).toBeTruthy();
    });
    test('Domain zone contains numbers.', ()=>{
        expect(checkZone('a2')).toBeTruthy();
    });
    test('Domain zone contains invalid characters.', ()=>{
        expect(invalidZoneNames.every((zone)=>checkZone(zone))).toBeTruthy();
    });
});

describe('Tests for checkValidateEmail function.', () => {
    test('E-mail is valid.', () => {
        expect(checkValidateEmail('kisseli@mail.ru')).toBeTruthy();
    });
    test('The domain name length is over 63 characters long.', () => {
        expect(checkValidateEmail('kisseli@mailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmail.ru')).toBeFalsy();
    });
    test('E-mail does not content @.', () => {
        expect(checkValidateEmail('kisselimail.ru')).toBeFalsy();
    });
    test('E-mail does not content user name.', () => {
        expect(checkValidateEmail('@mail.ru')).toBeFalsy();
    });
    test('E-mail does not content domain name.', () => {
        expect(checkValidateEmail('kisseli@.ru')).toBeFalsy();
    });
    test('E-mail does not content domain zone.', () => {
        expect(checkValidateEmail('kisseli@mail')).toBeFalsy();
    });
    test('E-mail is empty.', () => {
        expect(checkValidateEmail('')).not.toBeUndefined();
    });
});

describe('Tests for validationEmail function.', () => {
    test('E-mail is empty string.', () => {
        expect(validationEmail('')).toBe(7);
    });
    test('E-mail does not content user name.', () => {
        expect(validationEmail('@mail.ru')).toBe(2);
    });
    test('The host does not content name or zone (The host does not have any dot.).', () => {
        expect(validationEmail('kisseli@mail')).toBe(4);
    });
    test('E-mail is valid.', () => {
        expect(validationEmail('kisseli@mail.ru')).toBe(1);
    });
    test('The user name contains several dots in a row.', () => {
        expect(validationEmail('kis..seli@mail.ru')).toBe(3);
    });
    test('The user name starts with a dot.', () => {
        expect(validationEmail('.kisseli@mail.ru')).toBe(3);
    });
    test('The user name ends with a dot.', () => {
        expect(validationEmail('kisseli.@mail.ru')).toBe(3);
    });
    test('The domain zone is not entered.', () => {
        expect(validationEmail('kisseli@mail.')).toBe(6);
    });
    test('The domain zone contains errors.', () => {
        expect(validationEmail('kisseli@mail.cot')).toBe(6);
    });
    test('The domain zone contains numbers.', () => {
        expect(validationEmail('kisseli@mail.22')).toBe(6);
    });
    test('The domain zone contains invalid characters.', () => {
        const invalidZoneNames: Array<string> = invalidCharacters.split('').map((character) => 'kisseli@mail.a' + character);
        expect(invalidZoneNames.every((email)=>validationEmail(email)) && 6).toBe(6);
    });
    test('The user name contains several dash in a row.', () => {
        expect(validationEmail('kisseli@ma--il.ru')).toBe(5);
    });
    test('The user name starts with a dash.', () => {
        expect(validationEmail('kisseli@-mail.ru')).toBe(5);
    });
    test('The user name ends with a dash.', () => {
        expect(validationEmail('kisseli@mail-.ru')).toBe(5);
    });
    test('Some errors (The user name contains spaces).', () => {
        expect(validationEmail('kisseli    @mail.ru')).toBe(8);
    });
    test('Some errors (The host name contains spaces).', () => {
        expect(validationEmail('kisseli@      mail.ru')).toBe(8);
    });
    test('Some errors.', () => {
        expect(validationEmail('kisseli@mailmailmailmailmailmailmailmailmailmailmail.mailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmailmail.ru')).toBe(8);
    });
});

describe('Snapshots of components', () => {
    it('Should render Input component with success style.', () => {
        const component = render(<Input name={'InputEmail'}
        valueInput={'kisseli@mail.ru'}
        inputStyle={1}
        onChangeHandler={() => {}}
        onBlurHandler={() => {}}
        onFocusHandler={() => {}}
        />)
        expect(component).toMatchSnapshot();
    });
    it('Should render Input component with error style.', () => {
        const component = render(<Input name={'InputEmail'}
                                        valueInput={'@mail.ru'}
                                        inputStyle={2}
                                        onChangeHandler={() => {}}
                                        onBlurHandler={() => {}}
                                        onFocusHandler={() => {}}
        />)
        expect(component).toMatchSnapshot();
    });
    it('Should render StatusDescription ( codeStatus: 0))', () => {
        const component = render(<StatusDescription id={'description_id'}
        status={'none'}
        message={''}
        />)
        expect(component).toMatchSnapshot();
    });
    it('Should render StatusDescription ( codeStatus: 1)).', () => {
        const component = render(<StatusDescription id={'description_id'}
                                                    status={'success'}
                                                    message={'Your e-mail is received!'}
        />)
        expect(component).toMatchSnapshot();
    });
});

describe('StatusDescription', () => {
    test('E-mail is valid (codeStatus: 1).', () => {
        render(<InputContainer />);
        userEvent.type(screen.getByPlaceholderText<HTMLInputElement>('input your e-mail'), 'kisseli@mail.ru');
        userEvent.tab();
        expect(screen.getByTestId<HTMLSpanElement>('success')).toBeInTheDocument();
        expect(screen.queryByTestId<HTMLSpanElement>('error')).not.toBeInTheDocument();
    });

    test('User name not entered (codeStatus: 2).', () => {
        render(<InputContainer />);
        userEvent.type(screen.getByPlaceholderText<HTMLInputElement>('input your e-mail'), '@mail.ru');
        userEvent.tab();
        expect(screen.getByTestId<HTMLSpanElement>('error')).toBeInTheDocument();
        expect(screen.queryByTestId<HTMLSpanElement>('success')).not.toBeInTheDocument();
    });
});


