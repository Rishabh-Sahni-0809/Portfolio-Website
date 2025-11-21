import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { hackathons } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const HackathonCard = ({ hackathon }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: 'transparent', // We'll handle background with className
                padding: 0, // Reset padding to handle it in the div
                boxShadow: 'none',
                border: 'none',
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={hackathon.date}
            iconStyle={{ background: hackathon.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <div className="text-[16px] font-bold text-white font-serif">
                        {hackathon.title[0]}
                    </div>
                </div>
            }
        >
            <div className="bg-white dark:bg-tertiary dark:bg-gradient-to-br dark:from-[#1d1836] dark:to-[#151030] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-white/10">
                <div>
                    <h3 className='text-black dark:text-white text-[18px] font-bold font-serif tracking-wide'>{hackathon.title}</h3>
                    <p
                        className='text-gray-600 dark:text-secondary text-[12px] font-semibold tracking-wide'
                        style={{ margin: 0 }}
                    >
                        {hackathon.company_name}
                    </p>
                </div>

                <ul className='mt-3 list-disc ml-4 space-y-1'>
                    {hackathon.points.map((point, index) => (
                        <li
                            key={`hackathon-point-${index}`}
                            className='text-gray-700 dark:text-white-100 text-[12px] pl-1 tracking-wide font-light leading-relaxed'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

const Hackathons = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Competitions & Achievements
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Hackathons.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {hackathons.map((hackathon, index) => (
                        <HackathonCard
                            key={`hackathon-${index}`}
                            hackathon={hackathon}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Hackathons, "hackathons");
