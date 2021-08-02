import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Counter from "./Counter";

test('It should be having a div tag', () => {
    render(<Counter />);
    const rootElement = screen.getByTestId('counter');
    expect(rootElement).toBeDefined();
});

test('Counter Should be having a label with id as count', () => {
    render(<Counter />);
    const element = screen.getByTestId('count');
    expect(element).toBeDefined();
    expect(element).toHaveTextContent(0);
})
test('Counter Should be having a Button', () => {
    render(<Counter />);
    const btn = screen.getByTestId('btnIncrement');
    expect(btn).toBeDefined();
    expect(btn).toHaveTextContent('Increment');
    UserEvent.click(btn);
    UserEvent.click(btn);
    UserEvent.click(btn);
    const element = screen.getByTestId('count');
    expect(element).toBeDefined();
    expect(element).toHaveTextContent(3);
    //screen.debug();
})
test('Counter Should be having a count', () => {
    render(<Counter />);
    const inputCtrl = screen.getByTestId('inputctrl');
    expect(inputCtrl).toBeDefined();
    UserEvent.type(inputCtrl, "2")
    const element = screen.getByTestId('count');
    screen.debug();
    expect(element).toBeDefined();
    expect(element).toHaveTextContent(2);
    screen.debug();
})
// test('Counter Should be having a Button', () => {
//     render(<Counter />);
//     const inputCtrl = screen.getByTestId('inputctrl');
//     expect(inputCtrl).toBeDefined();

//      expect(()=>{
//          UserEvent.type(inputCtrl,"kiran");
//      }).toThrow('Input should be an integer')


//     //screen.debug();
// })