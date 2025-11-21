import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { skillsData } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ title, skills, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full"
    >
        <div className="bg-white dark:bg-white/5 backdrop-blur-sm py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col border border-gray-200 dark:border-white/10 rounded-lg hover:border-purple-500 dark:hover:border-white/20 transition-all duration-300 shadow-lg dark:shadow-xl">
            <h3 className="text-black dark:text-white text-[24px] font-serif font-bold text-center mb-8 tracking-wider">{title}</h3>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-3 bg-gray-100 dark:bg-black/30 px-4 py-2 rounded-full border border-gray-300 dark:border-white/5 hover:border-purple-500 dark:hover:border-neon-blue/50 transition-all hover:scale-110 cursor-default backdrop-blur-md"
                    >
                        {typeof skill.icon === 'string' ? (
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                        ) : (
                            <div className="w-8 h-8 text-purple-600 dark:text-neon-blue flex items-center justify-center font-bold text-xs">
                                {skill.name[0]}
                            </div>
                        )}
                        <span className="text-gray-800 dark:text-white/90 text-[16px] font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Technical Expertise
                </p>
                <div className="flex justify-center">
                    <h2 className={`${styles.sectionHeadText} text-center border-b-4 border-purple-500 inline-block pb-2`}>
                        Skill
                    </h2>
                </div>
            </motion.div>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
                {skillsData.map((category, index) => (
                    <SkillCard
                        key={category.title}
                        index={index}
                        {...category}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
