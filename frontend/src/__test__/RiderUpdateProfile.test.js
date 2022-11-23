import { render, screen} from '@testing-library/react';
import RiderProfileUpdate from '../RiderUpdateProfile/RiderProfileUpdate';
import {MemoryRouter } from 'react-router-dom';


test('rider update page tesing', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {bio: "Hello There", name: "Al Saud", email: "Free@email.com", mobile: "03328553999", cnic: "61101-12345678-35", address: "Machar Colony", deliveries: "5", rating: "4.2", wallet:"345"}}]}>
            <RiderProfileUpdate  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();

});


test('rider update page address validation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {bio: "Hello There", name: "Al Saud", email: "Free@email.com", mobile: "03328553999", cnic: "61101-12345678-35", address: "Machar Colony", deliveries: "5", rating: "4.2", wallet:"345"}}]}>
            <RiderProfileUpdate  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("textbox", { name: "Address" })).toHaveValue("Machar Colony");

});


test('rider update page Bio validation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {bio: "Hello There", name: "Al Saud", email: "Free@email.com", mobile: "03328553999", cnic: "61101-12345678-35", address: "Machar Colony", deliveries: "5", rating: "4.2", wallet:"345"}}]}>
            <RiderProfileUpdate  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("textbox", { name: "Bio" })).toHaveValue("Hello There");
  await expect(screen.getByRole("textbox", { name: "Bio" })).toBeEnabled();

});

test('rider update page Name validation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {bio: "Hello There", name: "Al Saud", email: "Free@email.com", mobile: "03328553999", cnic: "61101-12345678-35", address: "Machar Colony", deliveries: "5", rating: "4.2", wallet:"345"}}]}>
            <RiderProfileUpdate  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("textbox", { name: "Full Name" })).toHaveValue("Al Saud");
  await expect(screen.getByRole("textbox", { name: "Full Name" })).toBeEnabled();

});

test('rider update page Mobile validation', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {bio: "Hello There", name: "Al Saud", email: "Free@email.com", mobile: "03328553999", cnic: "61101-12345678-35", address: "Machar Colony", deliveries: "5", rating: "4.2", wallet:"345"}}]}>
            <RiderProfileUpdate  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByRole("textbox", { name: "Mobile Number" })).toHaveValue("03328553999");
  await expect(screen.getByRole("textbox", { name: "Mobile Number" })).toBeEnabled();

});