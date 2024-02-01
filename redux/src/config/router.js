
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Dashboard/>,
            },
                {
                    path: "aboutUs",
                    element: <AboutUs/>,
                },
                ]
    }
]);

function Layout(){
    return <div>
        <Header/>
        <Outlet/>
    </div>
}
function Router(){
    return <RouterProvider router={router} />
}
export default Router