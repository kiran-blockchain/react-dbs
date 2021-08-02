import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //screen.debug();
  const title = screen.getAllByText("Kiran")[0];
  expect(title).toBeInTheDocument();
});

test('renders by testid',()=>{
  render (<App/>);
  const id = screen.getByTestId('username');
  expect(id).toBeInTheDocument();
  expect(id).toHaveClass('App');
  expect(id).toHaveValue("Unit testing")
});
