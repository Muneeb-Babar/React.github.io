import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Card from "../views/Up";


const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard/>,
    },
    {
        path: "card",
        element: <Card/>,
        },
    
            
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router