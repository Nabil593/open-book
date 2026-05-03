import Image from 'next/image';
import React from 'react';
import image01 from "@/assets/image.jpg"
import image02 from "@/assets/image1.jpg"
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 rounded-md'>
            <div className="hero bg-gray-200 lg:py-30 md:py-30 py-10 rounded-[20px]">
                <div className="hero-content text-center lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-10">
                    <Image
                        src={image01}
                        alt="Box Office Movie"
                        width={300}
                        height={500}
                        className="lg:block hidden max-w-sm rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                        priority // First load-এ ইমেজটি দ্রুত দেখানোর জন্য
                    />
                    <div className="max-w-md lg:text-center md:text-left text-center">
                        <h1 className="text-5xl font-bold">Find Your Next Read</h1>
                        <p className="py-6">
                            A seamless and modern web application designed to digitize the traditional library experience.
                        </p>
                        <Link href={"/books"}><button className="btn btn-neutral">Browser Now</button></Link>
                    </div>

                    <Image
                        src={image02}
                        alt="Box Office Movie"
                        width={300}
                        height={500}
                        className="max-w-sm rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                        priority // First load-এ ইমেজটি দ্রুত দেখানোর জন্য
                    />
                </div>
            </div>

            
        </div>
    );
};

export default Banner;