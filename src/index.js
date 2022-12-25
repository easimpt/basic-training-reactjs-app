import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import reportWebVitals from './reportWebVitals';
import Guest from "./components/Layout/Guest/Guest";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Post from "./components/Post/Post";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" >
            <Route path="/" element={<App />} />

             <Route path="/login" element={<Login />} />
             <Route path="/posts/:postId" element={<Post />} />
        </Route>
    )
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

    {/*<App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
