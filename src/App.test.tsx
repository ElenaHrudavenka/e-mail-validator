import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import StatusDescription from "./components/StatusDescription";

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
        const inputElement = screen.getByRole<HTMLInputElement>('');
        expect(inputElement).toBeInTheDocument();
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

