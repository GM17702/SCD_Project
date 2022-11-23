import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RiderLogin from '../RiderLogin/RiderLogin';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

test('rider login page tesing', async() => 
{
 await render(
    <BrowserRouter>
        <Routes>
            <Route index element={<div><RiderLogin /></div>} />
        </Routes>
    </BrowserRouter> 
   );

  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Signup Instead" })).toBeInTheDocument();

});

test('rider login page fields tesing', async() => 
{
 await render(
    <BrowserRouter>
        <Routes>
            <Route index element={<div><RiderLogin /></div>} />
        </Routes>
    </BrowserRouter> 
   );

  expect(screen.getByTestId("email")).toBeVisible();
  expect(screen.getByTestId("email")).not.toBeDisabled();

  expect(screen.getByTestId("password")).toBeVisible();
  expect(screen.getByTestId("password")).not.toBeDisabled();
  

});


test('rider login page interaction', async() => 
{
 await render(
    
    <BrowserRouter>
    
        <Routes> 
            <Route index element={<div><RiderLogin /></div>} />
        </Routes>
        <ToastContainer/>
    </BrowserRouter> 
   );

   const email = screen.getByTestId("email");
   const pass = screen.getByTestId("password");
   await userEvent.type(email, 'index@html.com');
   await userEvent.type(pass, 'Password8');

    userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("button", { name: "Login" })).toBeVisible();

});