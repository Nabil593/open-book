import { Link } from 'lucide-react';
import React from 'react';

const BookFeature = () => {
    return (
        <div>
            <div className="flex justify-center items-end mb-10">
                <div className='text-center'>
                    <h2 className="text-5xl font-bold tracking-tight">Featured Books</h2>
                    <p className="text-zinc-400 mt-2">Handpicked titles for your next great read.</p>
                </div>
            </div>
        </div>
    );
};

export default BookFeature;