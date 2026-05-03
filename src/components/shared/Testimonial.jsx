import React from 'react';
import { reviews } from '../../../public/testimoniaData/reviews';

const Testimonial = () => {

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">What Our Readers Say</h2>
                <p className="text-gray-500 mb-10">Join thousands of happy book lovers</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-4 text-blue-600 font-serif">“</div>
                            <p className="text-gray-600 mb-6 italic leading-relaxed">{review.comment}</p>
                            <div className="text-sm mb-2 text-yellow-500">{review.rating}</div>
                            <h4 className="font-bold text-gray-800">{review.name}</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{review.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;