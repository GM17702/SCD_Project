import {
    BrowserRouter,
  } from "react-router-dom";
  import Food from '../components/Food'
import {render,screen} from "@testing-library/react"
import {Provider} from 'react-redux'
import {MemoryRouter } from 'react-router-dom';

import store from '../store'
test('Food',async () => {
   await render(

  <Provider store={store}>
   
 </Provider>
  );
   // const linkElement = screen.getByTestId("dashboard");
     
   
  });