import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBook = ({ product }) => {

    return (
        <div className="card w-full bg-gray-200 shadow-sm">
            <figure>
                <Image
                    src={product?.image_url}
                    width={250}
                    height={350}
                    alt={product?.title}
                    className="object-cover h-[350px] pt-4"
                    priority={true}
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{product?.title}</h2>
                <p className='line-clamp-2'>{product?.description}</p>
                <p className='text-gray-500 text-sm'>Available Quantity: {product?.available_quantity}</p>
                <div className="card-actions">
                    <button className="btn btn-neutral w-full"><Link href={`/books/${product.id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;