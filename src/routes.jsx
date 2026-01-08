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


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ui-ux" element={<UiUx/>} />
                <Route path="/wordpress" element={<WordPress/>} />
                <Route path="/custom-website" element={<CustomWebsite/>} />
                <Route path="/ecommerce-website" element={<Ecommerce/>} />
                <Route path="/email-template" element={<EmailerTemplate/>} />
                <Route path="/seo-services" element={<SeoService/>} />
                <Route path="/maintenance-services" element={<Maintenance/>} />
                <Route path="/branding-support" element={<BrandingSupport/>} />
                
                {/* error */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;