import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal } from 'lucide-react';

const About: React.FC = () => {
    const cards = [
        {
            icon: <Code size={32} />,
            title: 'Clean Code',
            description: 'I write clean, maintainable, and scalable code following best practices.',
        },
        {
            icon: <Palette size={32} />,
            title: 'Modern Design',
            description: 'I create beautiful, intuitive interfaces with a focus on user experience.',
        },
        {
            icon: <Terminal size={32} />,
            title: 'Problem Solver',
            description: 'I love tackling complex problems and finding efficient solutions.',
        },
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-card/50 backdrop-blur-sm border border-foreground p-8 rounded-2xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 bg-card/30 backdrop-blur-sm border border-foreground/50 hover:border-primary/50 transition-colors p-8 rounded-2xl max-w-4xl mx-auto"
                >
                    <div className="text-muted-foreground text-lg leading-relaxed text-center">
                        <p className='text-foreground font-bold text-2xl mb-6' >I'm Ayush Verma</p>
                        <p>I'm a passionate developer with a keen eye for detail. I specialize in building modern web applications
                        using the latest technologies. My goal is to create software that not only works perfectly but also
                        delivers an exceptional user experience. When I'm not coding, you can find me exploring new technologies
                        or contributing to open-source projects.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
