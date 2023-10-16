"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';



const NavbarComponent = () => {
    return (
        <header className='bi-header border-b-[1px]'>
            <div className='container mx-auto flex flex-wrap items-center justify-between h-[80px] space-x-10'>
                <div className='flex-col self-center justify-center text-white'>
                    <h2 className='font-bold text-[18px]'><Link href='/' className='no-underline text-white'>
                        LOGO HERE
                    </Link></h2>
                </div>
                <div className='flex-col self-center justify-center text-black'>
                    <ul className='flex space-x-10 mb-0'>
                        <li className='font-bold text-[14px]'>
                            <Link href='/airline/united-airlines' className='no-underline text-[#149CE2] mb-0'> UNITED STATUS</Link></li>
                        <li className='font-bold text-[14px]'>
                            <Link href='/airline/american-airline' className='no-underline text-[#149CE2] mb-0'> AMERICAN AIRLINES </Link></li>
                        <li className='font-bold text-[14px]'>
                            <Link href='/airline/delta-air-lines' className='no-underline text-[#149CE2] mb-0'>DELTA STATUS</Link></li>
                    </ul>
                </div>
                <div className='flex-col self-center justify-center text-black'>
                    <form>
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent ps-4 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" 
                                    placeholder="Enter Keyword for search" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );

}

export default NavbarComponent