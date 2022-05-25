import {render, screen} from "@testing-library/react";
import {Login} from "./Login";


test('should show a input with type text and placeholder "username" ', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('username');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a input with type password and placeholder "password" ', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('password');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'password');
})

test('should show a button that has the text "Login"', () => {
    render(<Login/>)
    const button = screen.getByText('Login');
    expect(button.tagName).toBe('BUTTON');
})




