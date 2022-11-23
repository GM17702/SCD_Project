import { render, screen} from '@testing-library/react';
import RiderDeliveries from '../RiderDeliveries/RiderDeliveries';
import {MemoryRouter } from 'react-router-dom';


test('rider Deliveries testing', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {email: "index@html.com"}}]}>
            <RiderDeliveries  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByText("Loading...")).toBeInTheDocument();

});