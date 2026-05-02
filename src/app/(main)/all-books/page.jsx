import SingleBook from '@/components/shared/SingleBook';
import React from 'react';


const productsFetch = async () => {
    const res = await fetch("https://json-data-book.onrender.com/books")
    const data = await res.json();
    // console.log(data)
    return data
}

const AllBooksPage = async() => {

    const products = await productsFetch()

    return (
        <div className="flex justify-center items-center flex-col mb-10">
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {
                    products.map(product => {
                        return <SingleBook key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    );
};

export default AllBooksPage;