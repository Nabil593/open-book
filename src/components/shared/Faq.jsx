import React from 'react';
import { faqData } from '../../../public/faqdata/faqData';

const Faq = () => {

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-gray-500 italic">Click to expand or collapse your questions</p>
                </div>

                <div className="space-y-3">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            // 'collapse' এর সাথে 'bg-white' এবং 'transition' রাখা হয়েছে স্মুথনেসের জন্য
                            className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* 'checkbox' ব্যবহারের ফলে এখন একই সাথে একাধিক খোলা যাবে এবং ক্লিক করে বন্ধও করা যাবে */}
                            <input type="checkbox" className="peer" /> 
                            
                            <div className="collapse-title text-lg font-semibold text-gray-800 py-5">
                                {item.question}
                            </div>
                            
                            <div className="collapse-content transition-all duration-500"> 
                                <div className="pb-5 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;