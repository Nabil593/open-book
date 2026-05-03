"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { Calendar, ShieldCheck, Fingerprint, User } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user)

    if (isPending) {
        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white animate-pulse rounded-2xl border">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
            </div>
        );
    }

    const joinedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="max-w-md mx-auto my-14 lg:px-0 px-3">
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">

                    <div className="flex flex-col items-center border-b border-gray-100 pb-6 mb-6">
                        <div className="relative group">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={50}
                                    height={50}
                                    className="h-24 w-24 rounded-full object-cover ring-4 ring-gray-200"
                                />
                            ) : (
                                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                                    <User className="text-gray-400" size={40} />
                                </div>
                            )}
                            {user.emailVerified && (
                                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm">
                                    <ShieldCheck className="text-blue-500" size={20} />
                                </div>
                            )}
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-sm text-gray-500 font-medium">{user.email}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <Fingerprint size={18} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account ID</p>
                                <p className="text-sm font-mono text-gray-700 truncate w-48">{user.id}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Joined On</p>
                                <p className="text-sm text-gray-700 font-medium">{joinedDate}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                <ShieldCheck size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</p>
                                <p className="text-sm text-gray-700 font-medium">
                                    {user.emailVerified ? 'Verified Member' : 'Pending Verification'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link href={"/my-profile/update"}>
                        <button className="w-full mt-8 bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer">
                            Update Profile
                        </button>
                    </Link>
                    <p className="text-center mt-6 text-sm text-gray-400">
                        Last updated at: {new Date(user.updatedAt).toLocaleTimeString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;