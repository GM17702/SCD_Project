import {
    BrowserRouter,
  } from "react-router-dom";
  import EditProfile from '../components/EditProfile'
import {render,screen} from "@testing-library/react"
import {MemoryRouter } from 'react-router-dom';

test('EditProfile',async () => {

   await render(
   
    <MemoryRouter initialEntries={[{ pathname: '/', state: {name: "Ali", email: "Free@email.com", phone: "03328553999", address: "Machar Colony"}}]}>
           <EditProfile/>
    </MemoryRouter> 
  
  );
 await expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
     
 });