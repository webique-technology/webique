import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* error */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;