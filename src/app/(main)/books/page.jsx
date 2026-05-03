import SingleBook from '@/components/shared/SingleBook';
import React from 'react';


const productsFetch = async () => {
    const res = await fetch("https://json-data-book.onrender.com/books")
    const data = await res.json();
    return data
}

const BooksPage = async () => {

    const products = await productsFetch();

    const filterProducts = 



    return (
        <div className="min-h-screen bg-gray-50/50 py-12">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
                    <div>
                        <h2 className='text-4xl font-black text-gray-900 tracking-tight'>
                            All <span className="">Books</span>
                        </h2>
                        <p className="text-gray-500 mt-2 text-lg">Explore our curated collection of world-class literature.</p>
                    </div>

                    <div className="relative w-full md:w-96 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search books, authors, or ISBN..."
                            className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-md leading-5 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-28">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Categories</h3>
                            <div className="flex flex-wrap lg:flex-col gap-3">
                                <button className='w-full text-left px-5 py-3 rounded-md font-semibold bg-black text-white shadow-lg shadow-blue-200 transition-all hover:scale-[1.02]'>
                                    All Collection
                                </button>
                                <button className='w-full text-left px-5 py-3 rounded-md font-medium text-gray-600 bg-white border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all'>
                                    Story & Fiction
                                </button>
                                <button className='w-full text-left px-5 py-3 rounded-md font-medium text-gray-600 bg-white border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all'>
                                    Technology
                                </button>
                                <button className='w-full text-left px-5 py-3 rounded-md font-medium text-gray-600 bg-white border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all'>
                                    Science & Nature
                                </button>
                            </div>

                            <div className="hidden lg:block mt-12 p-6 bg-gray-900 rounded-md text-white">
                                <p className="text-sm font-light opacity-80">New releases weekly!</p>
                                <h4 className="text-lg font-bold mt-1">Get the newsletter</h4>
                                <button className="btn mt-4">Join Now</button>
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 items-center'>
                            {
                                products.map((product) => (
                                    <div key={product.id} className="group cursor-pointer">
                                        <SingleBook product={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BooksPage;