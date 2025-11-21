import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/Profilepic.jpg";
import resume from "../assets/ResumeIMP.pdf";

const EducationCard = ({ index, education }) => (
    <div className='w-full border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300'>
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className='text-black dark:text-white text-[20px] font-bold font-serif tracking-wide'>{education.title}</h3>
                <p className='text-gray-600 dark:text-secondary text-[14px] font-semibold mt-1'>{education.company_name}</p>
            </div>
            <p className='text-purple-600 dark:text-neon-blue text-[14px] font-medium'>
                {education.date}
            </p>
        </div>

        <ul className='list-disc ml-5 space-y-2'>
            {education.points.map((point, index) => (
                <li
                    key={`education-point-${index}`}
                    className='text-gray-700 dark:text-white-100 text-[14px] pl-1 tracking-wide font-light leading-relaxed'
                >
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Education.
                </h2>
            </motion.div>

            <div className='mt-20 max-w-6xl mx-auto'>
                <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-[#101426] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-gradient opacity-5 pointer-events-none" />

                    {/* Left Sidebar */}
                    <div className="w-full md:w-1/3 flex flex-col items-center gap-6 relative z-10">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-white/10 shadow-xl">
                            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <a
                                href={resume}
                                download="Rishabh_Sahni_Resume.pdf"
                                className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-primary font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                Download Full Resume
                            </a>
                            {/* Placeholder for Open Terminal if needed, or just another action */}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-2/3 flex flex-col gap-6 relative z-10">
                        {education.map((edu, index) => (
                            <EducationCard key={`education-${index}`} index={index} education={edu} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
