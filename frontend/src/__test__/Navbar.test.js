import { render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar';
import {MemoryRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../store'
test(' navbar home navigation', async() => 
{
   
 await render(

  <Provider store={store}>
   

    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    
    </Provider>

   );
   
   await expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute('href',"/");
  
});


test('rider navbar profile navigation', async() => 
{
   
 await render(

  <Provider store={store}>
    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    </Provider>
   );
   
   await expect(screen.getByRole("link", { name: "Profile" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Profile" })).toHaveAttribute('href',"/Customer_Profile");

});

test('rider navbar orders navigation', async() => 
{
   
 await render(

  <Provider store={store}>
    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    </Provider>
   );
   
   await expect(screen.getByRole("link", { name: "Cart 0" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Cart 0" })).toHaveAttribute('href',"/Customer_Cart");

});

test('rider navbar deliver navigation', async() => 
{
   
 await render(

  <Provider store={store}>
    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    </Provider>
   );
   
   await expect(screen.getByRole("link", { name: "BhrosaRakhJani" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "BhrosaRakhJani" })).toHaveAttribute('href',"#");

});


test('rider navbar deliver navigation', async() => 
{
   
 await render(

  <Provider store={store}>
    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    </Provider>
   );
   
   await expect(screen.getByRole("link", { name: "Logout" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Logout" })).toHaveAttribute('href',"#");

});


test('rider navbar deliver navigation', async() => 
{
   
 await render(

  <Provider store={store}>
    <MemoryRouter >
            <Navbar  />
    </MemoryRouter> 
    </Provider>
   );
   
   await expect(screen.getByRole("link", { name: "Resturant" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Resturant" })).toHaveAttribute('href',"#");

});