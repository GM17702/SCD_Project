import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RiderSignup from '../RiderSignup/RiderSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

test('rider signup page tesing', async() => 
{
 await render(
    <BrowserRouter>
        <Routes>
            <Route index element={<div><RiderSignup  /></div>} />
        </Routes>
    </BrowserRouter> 
   );

   expect(screen.getByRole("heading", { name: "Rider Signup Form" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login Instead" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Submit form" })).toBeInTheDocument();

});


test('rider signup page interaction', async() => 
{
 await render(
    
    <BrowserRouter>
    
        <Routes> 
            <Route index element={<div><RiderSignup /></div>} />
        </Routes>
    </BrowserRouter> 
   );

   const email = screen.getByRole("textbox", { name: "Email ID" });
   const pass = screen.getByRole("textbox", { name: "CNIC Confirm Password" });
   const bio = screen.getByRole("textbox", { name: "Bio (3-4 words)" });
   const mob = screen.getByRole("textbox", { name: "Mobile Number" });
   const address = screen.getByRole("textbox", { name: "Address" });

   await userEvent.type(email, 'index@html.com');
   await userEvent.type(pass, 'Password8');
   await userEvent.type(bio, 'Hi there');
   await userEvent.type(mob, '03328553981');
   await userEvent.type(address, 'Kul Hu Allah Chowk');

    userEvent.click(screen.getByRole("button", { name: "Submit form" }));

    expect(screen.getByRole("button", { name: "Submit form" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Login Instead" })).toBeVisible();

});