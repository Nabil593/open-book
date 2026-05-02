import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBook = ({ product }) => {

    return (
        <Link href={"/single-book"}>
            <div className="card bg-gray-200 w-[282px] shadow-sm">
                <figure>
                    <Image
                        src={product.image_url}
                        width={250}
                        height={350}
                        alt={product.title}
                        className="object-cover h-[300px] pt-4"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;