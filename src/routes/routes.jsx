import {createBrowserRouter} from "react-router-dom";
import App from './../App';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from './../pages/Register/Register';
import AllEquipment from './../pages/AllEquipment/AllEquipment';
import AddEquipment from "../pages/AddEquipment/AddEquipment";
import EquipmentDetails from "../pages/EquipmentDetails.jsx/EquipmentDetails";
import UpdateEquipment from './../pages/UpdateEquipment/UpdateEquipment';
import MyEquipments from "../pages/MyEquipments/MyEquipments";
import PrivateRoutes from "./PrivateRoutes";
  
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
        element: <PrivateRoutes><AddEquipment /></PrivateRoutes>,
      },
      {
        path: "/equipments/by-email/:email",
        element:<PrivateRoutes><MyEquipments /></PrivateRoutes> ,
        loader: ({ params }) =>fetch(`http://localhost:5000/equipments/by-email/${params.email}`)
      },
      
      {
        path: "/equipments/:id",
        element :<PrivateRoutes> <EquipmentDetails /></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/equipments/${params.id}`)
        
      },
      {
        path: "/equipments/update/:id",
        element :<PrivateRoutes><UpdateEquipment /></PrivateRoutes> ,
        loader: ({params})=> fetch(`http://localhost:5000/equipments/${params.id}`)
        
      },
      
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