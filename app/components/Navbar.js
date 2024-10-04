// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About', href: '/about' },
        { id: 3, label: 'Services', href: '/services' },
        // Add more menu items as needed
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

export default Navbar;
