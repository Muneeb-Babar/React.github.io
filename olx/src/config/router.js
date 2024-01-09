
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard/>,
    },
    {
        path: '/detail',
        element: <Detail/>
        },
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router