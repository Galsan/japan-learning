// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

const AuthenticatedNav = ({ role }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const profileAction = [
        { id: 201, label: "Sign Out", href: "/auth/signOut" },
        { id: 201, label: "Sign Blah", href: "/auth/signOut" },
        { id: 201, label: "Sign hhaha", href: "/auth/signOut" },
        { id: 201, label: "Sign nahhh", href: "/auth/signOut" }
    ]

    const menuItems =
        role === "admin" ? [
            { id: 1, label: 'Home', href: '/admin' },
            { id: 2, label: 'User List', href: '/admin/userList' },
            { id: 3, label: 'Teacher Request', href: '/admin/teacherRequest' },
        ] :
            role === "teacher" ? [
                { id: 1, label: 'Home', href: '/teacher/' },
                { id: 2, label: 'Curriculum', href: '/teacher/curriculum' },
            ] :
                [
                    { id: 1, label: 'Home', href: '/' },
                    { id: 2, label: 'About', href: '/#about' },
                    { id: 3, label: 'Contact', href: '/#contact' },
                    { id: 4, label: 'Services', href: '/#services' },
                ];


    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <h1 className="text-white text-2xl font-semibold">
                            <Link href="/">Japanese Language Course</Link>
                        </h1>
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        {menuItems.map(({ id, label, href }) => (
                            <li key={id}>
                                <Link href={href} className="text-gray-300 hover:text-white">
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li id="signOut">
                            <Dropdown>
                                <DropdownTrigger flat="true" className=' text-gray-300, hover: cursor-pointer hover:text-white'>
                                    Profile
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" className='bg-gray-800 border-spacing-4 border-black '>
                                    {profileAction.map(({ id, label, href }) => (
                                        <DropdownItem key={id}>
                                            <Link href={href} className="text-gray-300 hover:text-white">
                                                {label}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                    <div
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="md:hidden cursor-pointer text-gray-300"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                </div>

            </div>
            {isMenuOpen && (
                <ul className="md:hidden bg-gray-700 text-white text-right">
                    {menuItems.map(({ id, label, href }) => (
                        <li key={id} className="py-2 px-4">
                            <Link href={href} onClick={() => setMenuOpen(false)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default AuthenticatedNav;
