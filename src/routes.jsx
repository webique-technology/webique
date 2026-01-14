import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import UiUx from "./pages/services/UiUx";

import CustomWebsite from "./pages/services/CustomWebsite";
import Ecommerce from "./pages/services/Ecommerce";
import EmailerTemplate from "./pages/services/EmailerTemplate";
import SeoService from "./pages/services/SeoService";
import Maintenance from "./pages/services/Maintenance";
import BrandingSupport from "./pages/services/BrandingSupport";
import WordPress from "./pages/services/WordPress";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ui-ux-design" element={<UiUx />} />
                <Route path="/wordpress" element={<WordPress />} />
                <Route path="/custom-website-development" element={<CustomWebsite />} />
                <Route path="/e-commerce-woocommerce" element={<Ecommerce />} />
                <Route path="/emailer-template-design" element={<EmailerTemplate />} />
                <Route path="/performance-seo" element={<SeoService />} />
                <Route path="/security-maintenance-support" element={<Maintenance />} />
                <Route path="/branding-support" element={<BrandingSupport />} />


                {/* error */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;