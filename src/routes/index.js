import { useRoutes } from "react-router";
import HomeLayout from "../common/layout/HomeLayout";
import Home from "../container/Pages/Home";

const Router = () => {

    return useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                { path: "", element: <Home /> }
            ]
        }
    ])
}

export default Router;