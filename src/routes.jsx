import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* error */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;