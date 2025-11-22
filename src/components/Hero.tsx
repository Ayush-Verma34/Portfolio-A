import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="text-center z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-accent font-medium tracking-wide uppercase mb-4">
                        Full Stack Developer
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl sm:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Digital Experiences</span> That Matter.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    I craft pixel-perfect, performant, and accessible websites with modern technologies.
                    Let's turn your vision into reality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3 bg-primary text-foreground rounded-full font-medium transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                    >
                        View Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/src/assets/ResumeAyush.pdf"
                        className="px-8 py-3 border border-muted-foreground text-foreground rounded-full font-medium hover:bgforeground/5 hover:text-foreground transition-colors flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                        <Download size={20} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
                    <motion.div
                        whileInView={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-secondary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
