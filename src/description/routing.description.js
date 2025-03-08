import Signin from "../presentation/Authentication/Signin";
import SignUp from "../presentation/Authentication/SignUp";
import Home from "../presentation/Home";
import ProtectedRoute from "../router/ProtectedRoute";
import ErrorBoundary from "../shared/ErroBoundary";
import Navbar from "../shared/Navbar";

export const routingArray = [
    {
        path: '/',
        element: <ErrorBoundary />,
        children: [
            {
                path: '/',
                element: <Navbar />,
                children: [
                    {
                        path: "/",
                        element: <ProtectedRoute />,
                        children: [
                            {
                                path: 'Home',
                                element: <Home />
                            }
                        ]
                    },
                    {
                        path: 'SignUp',
                        element: <SignUp />
                    },
                    {
                        path: 'SignIn',
                        element: <Signin/>
                    }
                ]
            }
        ]
    }
]