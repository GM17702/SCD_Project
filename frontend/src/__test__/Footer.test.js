import {
    BrowserRouter,
  } from "react-router-dom";
  import Footer from '../components/Footer'
import {render,screen} from "@testing-library/react"

test('Footer',async () => {
   await render(
    <BrowserRouter>
    <Footer />
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
     
    
  });