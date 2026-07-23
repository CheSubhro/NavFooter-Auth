
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

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-divider">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="font-bold text-xl text-primary">
                    MyApp
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex items-center gap-6">
                    <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
                    <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
                </nav>

                {/* Right Actions / Profile */}
                <div className="flex items-center gap-4">
                    {!isLoggedIn ? (
                        <Button 
                            as={Link} 
                            color="primary" 
                            to="/login" 
                            variant="flat"
                            size="sm"
                            onPress={() => setIsLoggedIn(true)}
                        >
                            Login
                        </Button>
                    ) : (
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform cursor-pointer"
                                    color="primary"
                                    name="User"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold text-primary">user@example.com</p>
                                </DropdownItem>
                                <DropdownItem key="my_profile" onPress={() => navigate('/profile')}>
                                    My Profile
                                </DropdownItem>
                                <DropdownItem key="change_password" onPress={() => navigate('/change-password')}>
                                    Password Change
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onPress={() => setIsLoggedIn(false)}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    )}

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="sm:hidden p-2 text-foreground focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="sm:hidden border-t border-divider bg-background px-6 py-4 flex flex-col gap-4">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary">Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary">About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary">Contact Us</Link>
                </div>
            )}
        </header>
    );
}