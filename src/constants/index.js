import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mysql,
    firebase,
    tensorflow,
    deeplearning,
    machineLearning,
    java,
    python,
    cpp,
    linux,
    aws,
    software,
    ai,
    fullstack,
    problem,
    project_traffic_management,
    project_voice_bot,
    project_face_recognition,
    project_compiler,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "tech",
        title: "Skills",
    },
    {
        id: "experience",
        title: "Education",
    },
    {
        id: "hackathons",
        title: "Hackathons",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: software,
    },
    {
        title: "AI Enthusiast",
        icon: ai,
    },
    {
        title: "Full Stack Developer",
        icon: fullstack,
    },
    {
        title: "Problem Solver",
        icon: problem,
    },
];

const hackathons = [
    {
        title: "AI Showcase",
        company_name: "AI Exhibition",
        icon: "A",
        iconBg: "#383E56",
        date: "September 2024",
        points: [
            "Top performer in AI-driven projects.",
        ],
    },
    {
        title: "Research Paper",
        company_name: "Academic Publication",
        icon: "R",
        iconBg: "#E6DEDD",
        date: "December 2024",
        points: [
            "Participant.",
            "Comparison between face recognition module and LBPH algorithm.",
        ],
    },
    {
        title: "Pentathon",
        company_name: "Cybersecurity Hackathon",
        icon: "P",
        iconBg: "#383E56",
        date: "April 2025",
        points: [
            "Top 60 nationally in ethical hacking challenge.",
        ],
    },
    {
        title: "HackHazard",
        company_name: "Tech Hackathon",
        icon: "H",
        iconBg: "#E6DEDD",
        date: "August 2025",
        points: [
            "Top 100 nationwide in innovation and engineering.",
        ],
    },
    {
        title: "Smart India Hackathon",
        company_name: "Government of India",
        icon: "S",
        iconBg: "#383E56",
        date: "November 2025",
        points: [
            "Developed a solution for smart traffic management.",
            "Reached the grand finale.",
        ],
    },
];

const skillsData = [
    {
        title: "Web Development",
        skills: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "React JS", icon: reactjs },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Node JS", icon: nodejs },
            { name: "MySQL", icon: mysql },
            { name: "Three JS", icon: threejs },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Python", icon: python },
            { name: "TensorFlow", icon: tensorflow },
            { name: "Deep Learning", icon: deeplearning },
            { name: "Machine Learning", icon: machineLearning },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "Java", icon: java },
            { name: "Python", icon: python },
            { name: "C++", icon: cpp },
            { name: "JavaScript", icon: javascript },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: git },
            { name: "GitHub", icon: git }, // Reusing git icon for now
            { name: "Linux", icon: linux },
            { name: "Docker", icon: docker },
            { name: "Firebase", icon: firebase },
            { name: "AWS", icon: aws },
        ],
    },
];

const education = [
    {
        title: "B.Tech - Computer Science",
        company_name: "LNCT, Bhopal",
        icon: "graduation-cap",
        iconBg: "#383E56",
        date: "2023 - 2027",
        points: [
            "Currently pursuing B.Tech in Computer Science with strong focus on Web Development, DSA, and problem-solving.",
            "Scored consistently good grades across semesters (CGPA: 7.85 till 4th sem).",
            "Actively improving skills through projects, coding, and learning.",
        ],
    },
    {
        title: "Secondary Education",
        company_name: "DAV Caldrys Public School,Katni",
        icon: "school",
        iconBg: "#E6DEDD",
        date: "2018 - 2020",
        points: [
            "CBSE Class X - DAV Caldrys Public School,Katni.",
            "Achieved excellent overall academic scores of aggregate 90% in Class 10.",
            "Achieved bronze medal at state level in IPO (International Physics Olympiad).",
        ],
    },
    {
        title: "Senior Secondary Education",
        company_name: "DAV Caldrys Public School,Katni",
        icon: "school",
        iconBg: "#E6DEDD",
        date: "2020 - 2022",
        points: [
            "CBSE Class XII - DAV Caldrys Public School,Katni.",
            "Achieved a good overall academic scores of aggregate 76% in Class 12.",
            "Built a solid PCM foundation during my Class 12 journey, shaping my path toward engineering.",
        ],
    },
];

const projects = [
    {
        name: "Smart Traffic Management",
        description:
            "AI-powered traffic control using Q-learning and LSTM-based flow prediction. Achieved 40% reduced congestion and adaptive signal control.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "reinforcement-learning",
                color: "green-text-gradient",
            },
            {
                name: "pygame",
                color: "pink-text-gradient",
            },
        ],
        image: project_traffic_management,
        source_code_link: "https://github.com/Rishabh-Sahni-0809",
    },
    {
        name: "AI Voice Bot",
        description:
            "Versatile assistant with 12+ modules (WolframAlpha, Wikipedia, etc.) using Python and NLP. Features voice commands, context retention, and automation.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "nlp",
                color: "green-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        image: project_voice_bot,
        source_code_link: "https://github.com/Rishabh-Sahni-0809",
    },
    {
        name: "Face Recognition App",
        description:
            "Real-time attendance system using OpenCV and Firebase. Achieved 95% accuracy with deep-learning-based recognition and optimized frame processing.",
        tags: [
            {
                name: "opencv",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "deep-learning",
                color: "pink-text-gradient",
            },
        ],
        image: project_face_recognition,
        source_code_link: "https://github.com/Rishabh-Sahni-0809",
    },
    {
        name: "Lexicographical Compiler",
        description:
            "Implemented a compiler performing lexical analysis and syntax validation, built in Java with efficient tokenization and parsing.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "compiler-design",
                color: "green-text-gradient",
            },
        ],
        image: project_compiler,
        source_code_link: "https://github.com/Rishabh-Sahni-0809",
    },
];

export { services, skillsData, education, projects, hackathons };
