import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import { Beranda, Siswa, NotFound } from "../pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <Beranda/>},
            {path: "siswa", element: <Siswa/>},
            {path: "404", element: <NotFound/>},
            {path: "*", element: <Navigate to="/404"/>}
        ]
    }
])

export default router;