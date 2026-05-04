"use client";
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
    return (
        <div className="bg-zinc-900 border-b border-zinc-800 py-4 my-30">
            <Marquee
                gradient={true}
                gradientColor="black"
                gradientWidth={100}
                speed={50}
                pauseOnHover={true}
            >
                <div className="flex gap-20 text-zinc-300 text-lg font-medium">
                    <p></p>
                    <p>
                        🔥 <span className="text-white">New Arrivals:</span> The Midnight Library
                    </p>
                    <p>
                        💳 <span className="text-blue-500 font-bold">Special Discount:</span> 20% Off on Memberships!
                    </p>
                    <p>
                        📚 <span className="text-white">Trending:</span> Mastering the MERN Stack
                    </p>
                    <p>
                        ⚡ <span className="text-white font-semibold italic">Limited Offer:</span> Free shipping on orders over $50!
                    </p>
                </div>
            </Marquee>
        </div>
    );
};

export default NewsTicker;