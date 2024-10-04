// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto text-center">
                <p className="text-gray-800">
                    © {new Date().getFullYear()} Japanese language course
                </p>
                <p className="text-gray-400">
                    Made with ❤️ using React and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
