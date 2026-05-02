import SingleBook from '@/components/shared/SingleBook';
import React from 'react';

const SignleBookPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`https://json-data-book.onrender.com/books/${id}`);
    const book = await res.json();

    return (
        <div>
            <h2>{book.title}</h2>
        </div>
    );
};

export default SignleBookPage;