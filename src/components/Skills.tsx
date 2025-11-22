
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skills = [
        { name: 'HTML5', icon: '/src/assets/icons/html.svg' },
        { name: 'CSS3', icon: '/src/assets/icons/css-3.svg' },
        { name: 'JavaScript', icon: '/src/assets/icons/js.svg' },
        { name: 'TypeScript', icon: '/src/assets/icons/typescript.svg' },
        { name: 'Tailwind CSS', icon: '/src/assets/icons/tailwindcss.svg' },
        { name: 'Bootstrap', icon: '/src/assets/icons/bootstrap.svg' },
        { name: 'React', icon: '/src/assets/icons/react.svg' },
        { name: 'Node.js', icon: '/src/assets/icons/nodejs.svg' },
        { name: 'MongoDB', icon: '/src/assets/icons/mongodb.svg' },
        { name: 'Express', icon: '/src/assets/icons/express.svg' },
        { name: 'Git', icon: '/src/assets/icons/git.svg' },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="lg:flex grid grid-cols-2 justify-center items-center gap-10 mx-auto">
                    {skills.map((skill) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: skills.indexOf(skill) * 0.1 }}
                            whileHover={{ scale: 1.2, transition: { duration: 0.1, delay: 0 } }}
                            className='w-28 h-28' key={skill.name}>
                            <img src={skill.icon} alt={skill.name} />
                            <p className="text-center text-foreground mt-2 text-sm font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
