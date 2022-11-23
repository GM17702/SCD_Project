import { render, screen} from '@testing-library/react';
import RiderOrder from '../RiderOrders/RiderOrder';
import {MemoryRouter } from 'react-router-dom';


test('rider order testing', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: {email: "index@html.com"}}]}>
            <RiderOrder  />
    </MemoryRouter> 
   );
   
   await expect(screen.getByText("Loading...")).toBeInTheDocument();

});