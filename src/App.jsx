import React from "react";

import Button from "@mui/material/Button";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LayOut from "./Components/LayOut";
import Home from  "./pages/Home" 
import Cart from "./pages/Cart"
import Login from "./pages/Login"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut></LayOut>}>
      <Route index element={<Home></Home>} ></Route>
      <Route path="/cart" element={<Cart></Cart>} ></Route>
      <Route path="/home" element={<Home></Home>} ></Route>
      <Route path="/login" element={<Login></Login>} ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
