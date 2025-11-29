import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const contactLinks = [
        { icon: FiGithub, href: 'https://github.com/Ayush-Verma34' },
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/ayush-verma-b64a05339' },
        { icon: Mail, href: 'mailto:ayush2003sitapur@gmail.com' },
        { icon: FaWhatsapp, href: 'https://wa.me/7607914166?text=Hi%20Ayush,%20I%20want%20to%20connect%20with%20you!' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex-shrink-0">
                        <a
                            href="#"
                            className="text-2xl font-heading font-bold text-primary">
                            Portfolio<span className="text-accent">.</span>
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    initial={{ opacity: 0, y: '-100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 + 0.1 * index }}
                                    key={link.name}
                                    href={link.href}
                                    className="text-accent-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                        className="hidden md:flex justify-center items-center py-4 space-x-8">
                        {contactLinks.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.6 }}
                                    key={index}
                                    href={item.href}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-accent-foreground hover:text-primary transition-colors">
                                    <Icon size={24} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-foreground p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-lg border-b border-foreground"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link, index) => (
                            <motion.a
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ delay: 0.2 + 0.2 * index }}
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="bg-secondary w-full flex justify-center text-accent-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center items-center py-4 space-x-8 border-t border-accent">
                        {contactLinks.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.6 }}
                                    key={index}
                                    href={item.href}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-accent-foreground hover:text-primary transition-colors">
                                    <Icon size={24} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
