import { useState, useEffect } from "react"

const Navbar = () => {
    const [isOpen, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            id="Navbar"
            className={`w-full flex justify-between px-6 md:px-20 h-16 items-center z-50 transition-all duration-500 text-gray-800 fixed top-0 left-0 ${
                isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20"
                    : "bg-transparent"
            }`}
        >
            {/* Logo */}
            <div className="font-outfit text-3xl font-semibold tracking-wide z-50">
                Map<span className="text-gray-600">Mind</span>
            </div>

            {/* Desktop Navigation Links */}
            <div>
                <ul className="hidden md:flex md:gap-5 lg:gap-7 font-inter font-medium">
                    <a href="#Hero" className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer  text-gray-500 hover:text-black"><li>Explore</li></a>
                    <a href="#Facts" className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-gray-500 hover:text-black"><li>Facts</li></a>
                    <a href="#About" className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-gray-500 hover:text-black"><li>About</li></a>
                    <a href="#Nations" className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-gray-500 hover:text-black"><li>Nations</li></a>
                    <a href="#Contact" className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-gray-500 hover:text-black"><li>Contact</li></a>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden z-50">
                <button 
                    className="text-gray-800 font-inter font-semibold text-lg tracking-wider focus:outline-none uppercase" 
                    onClick={() => setMenu(!isOpen)}
                >
                    {isOpen ? 'Close ✕' : 'Menu ☰'}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`absolute top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center gap-6 font-inter font-medium text-xl transition-all duration-300 md:hidden z-40 ${
                    isOpen 
                        ? "h-screen opacity-100 visible" 
                        : "h-0 opacity-0 invisible overflow-hidden"
                }`}
            >
                {/* Links par click hone par menu close karne ke liye onClick={() => setMenu(false)} lagaya hai */}
                <a href="#Hero" onClick={() => setMenu(false)} className="hover:text-gray-500 text-black text transition-colors">Explore</a>
                <a href="#Facts" onClick={() => setMenu(false)} className="hover:text-gray-500 text-black transition-colors">Facts</a>
                <a href="#About" onClick={() => setMenu(false)} className="hover:text-gray-500 text-blacktransition-colors">About</a>
                <a href="#Nations" onClick={() => setMenu(false)} className="hover:text-gray-500 text-black transition-colors">Nations</a>
                <a href="#Contact" onClick={() => setMenu(false)} className="hover:text-gray-500 text-black transition-colors">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar