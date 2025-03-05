import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BrowserRouter, 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
} from 'react-router-dom';

import Kingdoms from "./routes/kingdoms";
import Map from "./routes/map";
import Mechanics from "./routes/mechanics";
import Story from "./routes/story";
import MainPage from './mainpage';
import Formules from './routes/formules';
import Test from './routes/test';
import ErrorPage404 from './error404';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    errorElement: <ErrorPage404 />
  },
  {
    path: '/kingdoms',
    element: <Kingdoms/>
  },
  {
    path: '/map',
    element: <Map />
  },
  {
    path: '/mechanics',
    element: <Mechanics />
  },
  {
    path: '/story',
    element: <Story />
  },
  {
    path: '/formules',
    element: <Formules />
  },
  {
    path: '/test',
    element: <Test />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
