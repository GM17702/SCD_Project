import {
    BrowserRouter,
  } from "react-router-dom";
  import Profile from '../components/Profile'
import {render,screen} from "@testing-library/react"

test('profile',async () => {
   await render(
    <BrowserRouter>
    <Profile />
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
     await expect(screen.getByText("Loading")).toBeInTheDocument();
  });