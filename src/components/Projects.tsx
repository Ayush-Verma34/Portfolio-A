import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with React, Node.js, and MongoDB. Features include user authentication, cart management, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Next.js'],
            github: '#',
            demo: 'https://techkart-nine.vercel.app/',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Recipe Search App',
            description: 'A web application that allows users to search for recipes using an external API. Built with React and styled with Tailwind CSS.',
            tags: ['TypeScript', 'React', 'Tailwind CSS'],
            github: 'https://github.com/Ayush-Verma34/Meals-Application-React-js',
            demo: 'https://ayush-recipes.netlify.app/',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website featuring interactive animations and a premium design system.',
            tags: ['React', 'Tailwind CSS', 'Framer Motion'],
            github: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Online Book Reading Platform',
            description: 'A platform for reading and sharing books online, featuring user reviews and ratings.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Ayush-Verma34/Online-Book-Reading-Platform',
            demo: 'https://bookreadingplatform.netlify.app/',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Mak E-Commerce Platform',
            description: 'Frontend of a full-featured online clothing store built with HTML CSS & JS. Features include product listings, cart management, and responsive design.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Ayush-Verma34/MAK_E-Commerce',
            demo: 'https://mak-e-com.netlify.app/',
            image: 'https://plus.unsplash.com/premium_photo-1664910739194-a9dbe371b361?q=80'
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-card/50 backdrop-blur-sm border border-foreground/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} target='_blank' rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} target='_blank' rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
