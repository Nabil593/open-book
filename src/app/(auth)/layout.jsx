// import React from 'react';

import FooterPage from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <FooterPage />
        </div>
    );
};

export default AuthLayout;