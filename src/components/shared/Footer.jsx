import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-zinc-900 text-zinc-400 py-16">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand & About */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <h2 className="text-xl font-bold text-white tracking-tighter">
                            OpenBook
                        </h2>
                        <p className="text-sm leading-relaxed">
                            A seamless and modern web application designed to digitize the traditional library experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/all-books" className="hover:text-white transition-colors">All Books</Link></li>
                            <li><Link href="/my-profile" className="hover:text-white transition-colors">My Profile</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>nabilreza183@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>+880 1781-269971</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Follow</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all">
                                <FaXTwitter size={18} className="text-white" />
                            </Link>
                            <Link href="#" className="p-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all">
                                <FaGithub size={18} className="text-white" />
                            </Link>
                            <Link href="#" className="p-2 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all">
                                <FaLinkedinIn size={18} className="text-white" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-500">
                        © {currentYear} OpenBook. All rights reserved.
                    </p>
                    <p className="text-sm text-zinc-500">Built with ❤️ by Shariea Reza Nabil</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;