import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import { Beranda, Siswa } from "../pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <Beranda/>},
            {path: "siswa", element: <Siswa/>}
        ]
    }
])

export default router;