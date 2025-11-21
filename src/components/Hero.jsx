import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { styles } from "../styles";
import profilePic from "../assets/Profilepic.jpg";
import resume from "../assets/ResumeIMP.pdf";

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(50);

    const words = [
        "Dedicated to learning, solving and development and turning complex problem to simpler ones to solve it",
        "Web Developer | Software Engineer | AI Enthusiast",
        "Turning complex problems into simple solutions"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 50);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className={`relative w-full h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 overflow-hidden px-10 lg:px-20 max-w-7xl pt-20`}>

            {/* Left Side - Text */}
            <div className="flex flex-col items-start gap-3 z-10 max-w-xl mt-10">
                <h1 className="text-primary dark:text-white text-3xl lg:text-5xl font-bold font-serif tracking-wide">Hello, I'm</h1>
                <h1 className="text-primary dark:text-white text-4xl lg:text-6xl font-extrabold font-serif tracking-wider">Rishabh Sahni</h1>
                <h2 className="text-primary dark:text-white text-xl lg:text-3xl font-medium font-sans tracking-wide leading-normal mt-4 min-h-[100px]">
                    "{text}<span className="animate-pulse">|</span>"
                </h2>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                    <div
                        onClick={() => window.open("https://www.instagram.com/rishabh_sahni_10/", "_blank")}
                        className="p-2 rounded-full border border-purple-600 dark:border-neon-blue hover:bg-purple-600 dark:hover:bg-neon-blue hover:shadow-lg dark:hover:shadow-[0_0_15px_#00f3ff] transition-all cursor-pointer group"
                    >
                        <Instagram size={20} className="text-purple-600 dark:text-neon-blue group-hover:text-white" />
                    </div>
                    <div
                        onClick={() => window.open("https://x.com/Rishabh_8910", "_blank")}
                        className="p-2 rounded-full border border-purple-600 dark:border-neon-blue hover:bg-purple-600 dark:hover:bg-neon-blue hover:shadow-lg dark:hover:shadow-[0_0_15px_#00f3ff] transition-all cursor-pointer group"
                    >
                        <Twitter size={20} className="text-purple-600 dark:text-neon-blue group-hover:text-white" />
                    </div>
                    <div
                        onClick={() => window.open("https://github.com/Rishabh-Sahni-0809", "_blank")}
                        className="p-2 rounded-full border border-purple-600 dark:border-neon-blue hover:bg-purple-600 dark:hover:bg-neon-blue hover:shadow-lg dark:hover:shadow-[0_0_15px_#00f3ff] transition-all cursor-pointer group"
                    >
                        <Github size={20} className="text-purple-600 dark:text-neon-blue group-hover:text-white" />
                    </div>
                    <div
                        onClick={() => window.open("https://www.linkedin.com/in/rishabh-sahni-15854a237/", "_blank")}
                        className="p-2 rounded-full border border-purple-600 dark:border-neon-blue hover:bg-purple-600 dark:hover:bg-neon-blue hover:shadow-lg dark:hover:shadow-[0_0_15px_#00f3ff] transition-all cursor-pointer group"
                    >
                        <Linkedin size={20} className="text-purple-600 dark:text-neon-blue group-hover:text-white" />
                    </div>
                </div>

                {/* Download CV Button */}
                <a
                    href={resume}
                    download="Rishabh_Sahni_Resume.pdf"
                    className="mt-6 px-6 py-2 rounded-full border border-purple-600 dark:border-neon-blue text-purple-600 dark:text-neon-blue font-medium text-base hover:bg-purple-600 dark:hover:bg-neon-blue hover:text-white hover:shadow-lg dark:hover:shadow-[0_0_15px_#00f3ff] transition-all tracking-wider flex items-center justify-center"
                >
                    Download CV
                </a>
            </div>

            {/* Right Side - Image */}
            <div className="relative z-10 mt-10">
                <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-purple-600 dark:border-neon-blue shadow-xl dark:shadow-[0_0_40px_#00f3ff] flex items-center justify-center bg-gray-200 dark:bg-black-200 overflow-hidden relative">
                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(147,51,234,0.5)] dark:shadow-[inset_0_0_40px_#00f3ff] opacity-40"></div>

                    {/* Profile Image */}
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
