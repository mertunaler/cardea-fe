import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/SignIn.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import {UserContextProvider} from "./context/UserContextProvider.tsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage/>,

        },
        {
            path: "/sign-in",
            element: <SignIn/>,
        }
    ]);

    return (
        <UserContextProvider>
            <ThemeProvider theme={createTheme()}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </UserContextProvider>

    )
}

export default App
