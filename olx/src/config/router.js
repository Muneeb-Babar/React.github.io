
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import SignUp from "../components/Signup";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard/>,
    },
    {
        path: '/detail/:adId',
        element: <Detail/>
        },
        {
            path: '/login',
            element: <Login/>
            },
        {
            path: '/signup',
            element: <SignUp/>
            },
            
            
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router