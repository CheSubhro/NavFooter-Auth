
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Button, 
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Avatar 
} from "@heroui/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact Us' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="font-extrabold text-xl text-indigo-400 tracking-wide">
                    MyApp
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.to} 
                            to={link.to} 
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions / Profile */}
                <div className="flex items-center gap-4">
                    {!isLoggedIn ? (
                        <Button 
                            as={Link} 
                            to="/login" 
                            size="sm"
                            onPress={() => setIsLoggedIn(true)}
                            className="bg-indigo-600 text-white font-medium px-5 rounded-lg border border-indigo-400/40 shadow-md shadow-indigo-950/50 hover:bg-indigo-500 hover:border-indigo-300 active:scale-95 transition-all duration-200"
                        >
                            Login
                        </Button>
                    ) : (
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform cursor-pointer ring-2 ring-indigo-500/50"
                                    name="User"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold text-slate-700">Signed in as</p>
                                    <p className="font-semibold text-indigo-600">user@example.com</p>
                                </DropdownItem>
                                <DropdownItem key="my_profile" onPress={() => navigate('/profile')}>
                                    My Profile
                                </DropdownItem>
                                <DropdownItem key="change_password" onPress={() => navigate('/change-password')}>
                                    Password Change
                                </DropdownItem>
                                <DropdownItem key="logout" className="text-danger" color="danger" onPress={() => setIsLoggedIn(false)}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    )}

                    {/* Mobile Menu Button with smooth icon transition */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        aria-label="Toggle Menu"
                        className="sm:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 focus:outline-none transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu with Animation */}
            {isMenuOpen && (
                <div className="sm:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-lg px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.to} 
                            to={link.to} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-1"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}