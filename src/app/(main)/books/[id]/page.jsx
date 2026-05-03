"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SignleBookPage =  () => {

    const param = useParams()
    const id = param?.id;

    const [book, setBook] = useState();
    const [borrrow, setBorrow] = useState(false);

    useEffect(() => {
        if(!id) return;
        const selectedProduct = async() => {
            const res = await fetch(`https://json-data-book.onrender.com/books/${id}`);
            const bookData = await res.json();
            setBook(bookData)
        }
        selectedProduct()
        
    }, [id]);

    if (!book) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const handleBorrow = () => {

        if(borrrow) {
            toast.success("Book Return successfully!");
        } else {
            toast.success('Book borrowed successfully!');
        }
        
        setBorrow(!borrrow);
    }

    return (
        <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center p-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-start">

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-[360px] h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-100">
                        <Image
                            src={book.image_url}
                            alt="Book Cover"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-8 py-4">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                            {book.category}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                            {book.title}
                        </h1>
                        <p className="text-2xl text-zinc-500 font-medium italic">
                            by <span className="text-zinc-900 not-italic">{book.author}</span>
                        </p>
                    </div>

                    <div className="h-px bg-zinc-100 w-full" />

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Description</h3>
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
                            {book.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-10">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">Availability</p>
                            <p className="text-2xl font-bold text-emerald-600">{book.available_quantity} copies left</p>
                        </div>
                        <div className="w-px h-10 bg-zinc-100" />
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">Rating</p>
                            <p className="text-2xl font-bold text-zinc-900 flex items-center gap-1">
                                4.8 <span className="text-amber-400">★</span>
                            </p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button onClick={handleBorrow} className={`btn ${borrrow ? 'btn-error' : 'btn-neutral'}`}>
                            {borrrow ? 'Return' : "Borrow This Book"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignleBookPage;