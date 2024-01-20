
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import SignUp from "../components/Signup";
import Login from "../components/Login";
import Selloptions from "../components/Selloptions";
import Sellerform from "../components/Sellerform";
import GetMyAd from "../MyAds";

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
            {
                path: '/selloptions',
                element: <Selloptions/>
                },
                {
                    path: '/sellerform',
                    element: <Sellerform/>
                    },
                    {
                        path: '/myads',
                        element: <GetMyAd/>
                        },
            
            
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router