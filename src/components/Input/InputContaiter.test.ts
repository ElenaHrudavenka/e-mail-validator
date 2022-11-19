import React from 'react';
import {checkContainsDash, checkContainsDot, checkZone} from "./InputContainer.helpers";

describe('Testing the CheckContainsDash function.', () => {
    test('The function doesn\'t return undefined if the argument is an empty string.', () => {
        const hosts = [''];
        expect(checkContainsDash(hosts)).not.toBeUndefined();
    });
    test('Return true if dash at the beginning of your domain name.', () => {
        const hosts = ['-domain'];
        expect(checkContainsDash(hosts)).toBeTruthy();
    });
    test('Return true if dash at the end of your domain name.', () => {
        const hosts = ['domain-'];
        expect(checkContainsDash(hosts)).toBeTruthy();
    });
    test('Return true if use more than one dash in a row.', () => {
        const hosts = ['do--main'];
        expect(checkContainsDash(hosts)).toBeTruthy();
    });
    test('Return false if dash don\'t use use at the beginning or end of your domain name. And if don\'t use more than one dash in a row.', () => {
        const hosts = ['do-main'];
        expect(checkContainsDash(hosts)).toBeFalsy();
    });
});

describe('CheckContainsDot', () => {
    test('The function doesn\'t return undefined if the argument is an empty string.', () => {
        const userName = ''
        expect(checkContainsDot(userName)).not.toBeUndefined();
    });
    test('Return true if dot at the beginning of your user name', () => {
        const userName = '.userAlena'
        expect(checkContainsDot(userName)).toBeTruthy();
    });
    test('Return true if dot at the end of your user name', () => {
        const userName = 'userAlena.'
        expect(checkContainsDot(userName)).toBeTruthy();
    });
    test('Return true if use more than one dot in a row.', () => {
        const userName = 'user..Alena'
        expect(checkContainsDot(userName)).toBeTruthy();
    });
    test('Return false if dot don\'t use use at the beginning or end of your user name. And if don\'t use more than one dot in a row.', () => {
        const userName = 'user.Alena'
        expect(checkContainsDot(userName)).toBeFalsy();
    });
});

describe('CheckZone', ()=>{
    test('The function doesn\'t return undefined if the argument is an empty string.', ()=>{
        const domainZone = '';
        expect(checkZone(domainZone)).not.toBeUndefined();
    });
    test('Domain zone consists of two letters.', ()=>{
        const domainZone = 'gg';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'aero\'.', ()=>{
        const domainZone = 'aero';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'arpa\'.', ()=>{
        const domainZone = 'arpa';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'asia\'.', ()=>{
        const domainZone = 'asia';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'biz\'.', ()=>{
        const domainZone = 'biz';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'cat\'.', ()=>{
        const domainZone = 'cat';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'com\'.', ()=>{
        const domainZone = 'com';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'coop\'.', ()=>{
        const domainZone = 'coop';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'edu\'.', ()=>{
        const domainZone = 'edu';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'gov\'.', ()=>{
        const domainZone = 'gov';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'info\'.', ()=>{
        const domainZone = 'info';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'int\'.', ()=>{
        const domainZone = 'int';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'jobs\'.', ()=>{
        const domainZone = 'jobs';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'mil\'.', ()=>{
        const domainZone = 'mil';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'mobi\'.', ()=>{
        const domainZone = 'mobi';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'museum\'.', ()=>{
        const domainZone = 'museum';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'name\'.', ()=>{
        const domainZone = 'name';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'net\'.', ()=>{
        const domainZone = 'net';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'org\'.', ()=>{
        const domainZone = 'org';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'pro\'.', ()=>{
        const domainZone = 'pro';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'tel\'.', ()=>{
        const domainZone = 'tel';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone is equal \'travel\'.', ()=>{
        const domainZone = 'travel';
        expect(checkZone(domainZone)).toBeFalsy();
    });
    test('Domain zone consists more than two letters (except: aero,arpa,asia,biz,cat,com,coop,edu,gov,info,int,jobs,mil,mobi,museum,name,net,org,pro,tel,travel).', ()=>{
        const domainZone = 'sdd';
        expect(checkZone(domainZone)).toBeTruthy();
    });
    test('Domain zone contains numbers.', ()=>{
        const domainZone = 'a2';
        expect(checkZone(domainZone)).toBeTruthy();
    });
    test('Domain zone contains invalid characters.', ()=>{
        const invalidCharacters = '-!#$%&\'*+/=?^_`{|}~';
        const invalidZoneNames: Array<string> = invalidCharacters.split('').map((character) => 'a' + character)
        expect(invalidZoneNames.some((zone)=>checkZone(zone))).toBeTruthy();
    });
});



