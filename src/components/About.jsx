import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full xs:w-[250px]'
    >
        <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] overflow-hidden min-h-[280px] flex justify-center items-center flex-col relative group'
            >
                <img src={icon} alt={title} className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <h3 className='text-white text-[20px] font-bold text-center relative z-10 px-4'>
                    {title}
                </h3>
            </div>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
            </motion.div>

            <div className='mt-10 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
