import Banner from '@/components/shared/Banner';
import Navbar from '@/components/shared/Navbar';
import Marque from '@/components/shared/Marque';
import React from 'react';
import BookFeature from '@/components/shared/BookFeature';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Marque />
            <BookFeature />
            {children}
        </div>
    );
};

export default MainLayout;