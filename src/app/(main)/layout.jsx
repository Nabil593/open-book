import Navbar from '@/components/shared/Navbar';
import React from 'react';
import BookFeature from '@/components/shared/BookFeature';

const MainLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;