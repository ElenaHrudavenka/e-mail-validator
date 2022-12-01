import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import StatusDescription from "./components/StatusDescription";
import userEvent from "@testing-library/user-event";

test('Renders input title.', () => {
    render(<App/>);
    const text = screen.getByText(/Enter your e-mail:/i);
    expect(text).toBeInTheDocument();
});

test('Renders input element.', () => {
    render(<App/>);
    const inputElement = screen.getByRole<HTMLInputElement>('textbox');
    expect(inputElement).toBeInTheDocument();
});

describe('StatusDescription', () => {
    test('Renders StatusDescription element.', () => {
        render(<App/>);
        userEvent.type(screen.getByRole<HTMLInputElement>('textbox'), 'kisseli@mail.ru');
        userEvent.tab();
        const descriptionBlock = document.getElementsByClassName('descriptionBlock')
        expect(descriptionBlock[0].children[0]).toContainHTML('<span data-descr-');
    });

    test('No success message by default.',  () => {
        render(<App/>);
        expect(screen.queryByTestId('success')).not.toBeInTheDocument();
    });

    test('No error message by default.', () => {
        render(<App/>);
        expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    });

});

