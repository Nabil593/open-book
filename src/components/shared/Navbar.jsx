"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Navbar = () => {

    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;
    console.log(user)

    const handleLogout = async () => {
        const {data, error} = await authClient.signOut();
        router.push("/login");

        if (error) {
            toast.error();
        } else {
            toast.success("Logout successful!");
        }
    }


    return (
        <div className="w-full bg-gray-100 mx-auto flex items-center justify-between">

            <div className="navbar w-full max-w-[1200px] mx-auto border-none">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/all-books"}>All Books</Link></li>
                            <li><Link href={"/my-profile"}>My Profile</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="text-xl font-semibold">OpenBook</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/all-books"}>All Books</Link></li>
                        <li><Link href={"/my-profile"}>My Profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {isPending ? <span className="loading loading-spinner text-neutral"></span> : user
                        ? <>
                            <h2>Hello, {user?.name}</h2>
                            <Image
                                src={user?.image}
                                width={30}
                                height={10}
                                alt="Logo"
                                className='rounded-full'
                            />
                            <button onClick={handleLogout} className="btn"><Link href={"/login"}>Logout</Link></button>
                        </>
                        :
                        <>
                            <button className="btn"><Link href={"/login"}>Log In</Link></button>
                            <button className="btn"><Link href={"/registration"}>Sign Up</Link></button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;