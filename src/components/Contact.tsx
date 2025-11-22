import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">Let's Talk</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            I'm currently open to new opportunities and collaborations. Whether you have a question
                            or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-foreground">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary">Email</p>
                                    <p className="font-medium">ayush2003sitapur@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-foreground">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary">Phone</p>
                                    <p className="font-medium">+91 7607914166</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-foreground">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary">Location</p>
                                    <p className="font-medium">Sitapur, UP, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-card/50 backdrop-blur-sm border border-foreground/50 p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Peter Parker"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/20 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-black/20 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/20 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-foreground font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
