import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Register } from "./Register";
import Login from "./Login";
import { WeatherPage } from "./WeatherPage";

const Routes = () => {    
    const publicRoutes = [
        {
            path: "/",
            element: <div>Home</div>
        },        
    ];

    const unauthenticatedRoutes = [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ];

    const authenticatedRoutes = [{
        path: "/app",
        element: <ProtectedRoute />,
        children: [
            {
                path: "weather",
                element: <WeatherPage />
            },
            {
                path: "profile",
                element: <div>Profile</div>
            },
            {
                path: "logout",
                element: <div>Logout</div>
            }]
    }];

    const router = createBrowserRouter([
        ...publicRoutes,
        ...unauthenticatedRoutes,
        ...authenticatedRoutes
    ]);

    return <RouterProvider router={router} />;
}


export { Routes };