import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Questions from "./pages/Questions";
import Results from "./pages/Results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/questions",
        element: <Questions/>
    },
    {
        path: "/results",
        element: <Results/>
    }
])


const Rutas = () => {
   return  <RouterProvider router={router}/>
}

export default Rutas;