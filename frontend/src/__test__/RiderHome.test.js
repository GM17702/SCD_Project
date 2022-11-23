import { render, screen} from '@testing-library/react';
import RiderHome from '../RiderHome/RiderHome';
import {MemoryRouter } from 'react-router-dom';


test('rider home page carousel', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {email: "index@html.com"}}]}>
            <RiderHome  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("button", { name: "Slide 1" })).toBeInTheDocument();
  await expect(screen.getByRole("button", { name: "Slide 2" })).toBeInTheDocument();
  await expect(screen.getByRole("button", { name: "Slide 3" })).toBeInTheDocument();

});

test('rider home page links testing', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {email: "index@html.com"}}]}>
            <RiderHome  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("button", { name: "Manage Profile" })).toBeInTheDocument();
  await expect(screen.getByRole("button", { name: "Manage Orders" })).toBeInTheDocument();
  await expect(screen.getByRole("button", { name: "Complete Delivery" })).toBeInTheDocument();

});