
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from "@heroui/react";

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-content1 border-t border-divider text-foreground transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-4 md:col-span-1">
                        <Link to="/" className="font-bold text-2xl text-primary">
                            MyApp
                        </Link>
                        <p className="text-sm text-default-500">
                            Building scalable, modern, and high-performance web applications with cutting-edge technologies.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Icons (SVG) */}
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-default-500 hover:text-primary transition-colors">
                                <span className="sr-only">GitHub</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-default-500">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal / Support */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support & Legal</h3>
                        <ul className="space-y-2 text-sm text-default-500">
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Subscription */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Updated</h3>
                        <p className="text-sm text-default-500">
                            Subscribe to our newsletter for the latest updates and features.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                size="sm"
                                className="max-w-xs"
                            />
                            <Button color="primary" size="sm" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="border-t border-divider pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-default-400">
                    <p>&copy; {currentYear} MyApp. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">
                        Designed with ❤️ using <span className="text-primary font-medium">HeroUI</span> & <span className="text-primary font-medium">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}