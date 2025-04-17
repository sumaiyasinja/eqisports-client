import {createBrowserRouter} from "react-router-dom";
import App from './../App';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from './../pages/Register/Register';
import AllEquipment from './../pages/AllEquipment/AllEquipment';
import AddEquipment from "../pages/AddEquipment/AddEquipment";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
        children: [
      {
        path: "/",
        element: <Home />,
        loader : () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment />,
      },
      // {
      //   path: "/equipment/:id",
      
        
      // },
      
      {
        path: "/allEquipment",
        element: <AllEquipment />,
        loader : () => fetch("http://localhost:5000/equipments"),
      },
      // {
      //   path: "/myAddedEquipment",
      //   element: <MyEquipment />,
      // },
    ],
    },
  ]);

  export default router;