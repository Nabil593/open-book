import React from 'react';
import SingleBook from './SingleBook';


const productsFetch = async () => {
    const res = await fetch("https://json-data-book.onrender.com/books")
    const data = await res.json();
    return data
}

const BookFeature = async () => {

    const products = await productsFetch()

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col mb-10">
            <div className='text-center mb-10'>
                <h2 className="text-4xl font-bold tracking-tight">Featured Books</h2>
                <p className="text-zinc-400 mt-2">Handpicked titles for your next great read.</p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-center'>
                {
                    products.slice(0, 4).map(product => {
                        return <div key={product.id}>
                            <SingleBook product={product} />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default BookFeature;