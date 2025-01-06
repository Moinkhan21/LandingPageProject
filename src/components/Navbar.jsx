import { Menu, X } from "lucide-react"; // Icons for menu and close button
import { useState } from "react"; // React hook to manage state
import logo from "../assets/logo.png"; // Importing logo image
import { navItems } from "../constants"; // Navigation items array

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); // State to track mobile menu visibility

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen); // Toggles the state for mobile drawer
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            {/* Sticky navbar with a blurred background and subtle border */}
            <div className="container px-4 mx-auto relative text-sm">
                {/* Wrapper with padding and responsive width */}
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        {/* Logo image */}
                        <span className="text-xl tracking-tighter">VirtualR</span>
                        {/* Brand name */}
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                                {/* Links rendered dynamically from navItems array */}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
                        >
                            Create an account
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                            {/* Displays close or menu icon based on the mobileDrawerOpen state */}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        {/* Drawer styling and layout */}
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                    {/* Links for mobile drawer */}
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 mt-2">
                            {/* Buttons in mobile drawer */}
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
                            >
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
