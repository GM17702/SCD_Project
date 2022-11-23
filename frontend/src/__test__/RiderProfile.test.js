import { render, screen} from '@testing-library/react';
import RiderProfile from '../RiderProfile/RiderProfile';
import {MemoryRouter } from 'react-router-dom';


test('rider profile page tesing', async() => 
{
   
 await render(
    <MemoryRouter initialEntries={[{ pathname: '/', state: 'index@html.com' }]}>
            <RiderProfile  />
    </MemoryRouter> 
   );
   
  await expect(screen.getByText("Loading...")).toBeInTheDocument();

});