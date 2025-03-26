import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SVGComponent from "./svg/Logo";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-md w-full h-24 relative">
            <div className="container mx-auto flex justify-between items-end h-full">

                {/* Logo */}
                <div>
                    <div className="flex flex-row absolute -bottom-8.5 z-10">
                        <SVGComponent />
                        <Link to="/" className="text-2xl font-bold "> <span className="text-blue-400 "> DEEP </span> NET <br /><span className="text-gray-400">SOFT</span> </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 p-4">
                    <Link to="/" className="hover:text-gray-300">HOME</Link>
                    <Link to="/menu-page" className="hover:text-gray-300">MENU</Link>
                    <Link className="hover:text-gray-300">MAKE A RESERVATION</Link>
                    <Link to="/contact" className="hover:text-gray-300">CONTACT US</Link>
                </nav>
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white bg"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden bg-blue-700 p-4 flex flex-col gap-3 text-center">
                    <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/services" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link to="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
