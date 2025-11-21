import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-white dark:bg-primary" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-primary dark:text-white text-[18px] font-bold cursor-pointer flex '>
                        <span className="text-neon-blue">Rishabh</span>&nbsp;Sahni
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-neon-blue" : "text-gray-700 dark:text-secondary"
                                } hover:text-black dark:hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    {/* Theme Toggle */}
                    <li className="cursor-pointer" onClick={toggleTheme}>
                        {theme === "dark" ? <Sun color="white" size={24} /> : <Moon color="black" size={24} />}
                    </li>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
                    <div className="cursor-pointer" onClick={toggleTheme}>
                        {theme === "dark" ? <Sun color="white" size={24} /> : <Moon color="black" size={24} />}
                    </div>
                    <div
                        className='w-[28px] h-[28px] object-contain cursor-pointer flex justify-center items-center'
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X className="text-primary dark:text-white" /> : <Menu className="text-primary dark:text-white" />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-white dark:bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg border dark:border-none`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-neon-blue" : "text-gray-700 dark:text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
