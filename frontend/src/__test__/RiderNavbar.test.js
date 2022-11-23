import { render, screen} from '@testing-library/react';
import RiderNavbar from '../RiderNavbar/RiderNavbar';
import {MemoryRouter } from 'react-router-dom';


test('rider navbar home navigation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderNavbar  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute('href',"/rider/RiderHome");

});

test('rider navbar profile navigation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderNavbar  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByRole("link", { name: "Profile" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Profile" })).toHaveAttribute('href',"/rider/RiderProfile");

});

test('rider navbar orders navigation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderNavbar  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByRole("link", { name: "Orders" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Orders" })).toHaveAttribute('href',"/rider/RiderOrders");

});

test('rider navbar deliver navigation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderNavbar  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByRole("link", { name: "Deliver" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Deliver" })).toHaveAttribute('href',"/rider/RiderDeliveries");

});

test('rider navbar logout navigation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderNavbar  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByRole("link", { name: "Log out" })).toBeInTheDocument();
   await expect(screen.getByRole("link", { name: "Log out" })).toHaveAttribute('href',"/rider/RiderLogin");

});