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
    carrent,
    jobit,
    tripguide,
    threejs,
    coop,
    danpo,
    avk,
    temp,
    knox,
    noImage,
    drone,
    cv,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: ".Net/C# Developer",
        icon: web,
    },
    {
        title: "FullStack Developer",
        icon: creator,
    },
    {
        title: "Software Engineer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "C#",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node Red",
        icon: redux,
    },
    {
        name: ".NET",
        icon: tailwind,
    },
    {
        name: "Entity Framework",
        icon: nodejs,
    },
    {
        name: "Azure DevOps",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GitHub",
        icon: git,
    },
    {
        name: "Azure DevOps",
        icon: figma,
    },
    {
        name: "Blazor",
        icon: docker,
    },
    {
        name: "Tailwindcss",
        icon: docker,
    },
    {
        name: "Unity",
        icon: docker,
    },
    {
        name: "Scrum",
        icon: docker,
    },
    {
        name: "Unit tests",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Warehouse employee",
        company_name: "Coop Logistik",
        icon: coop,
        iconBg: "#383E56",
        date: "May 2020 - Aug 2020",
        points: [
            "Packing groceries store orders fast and effectively",
            "Responsible for cleaning minitruck.",
            "Working independent",
        ],
    },
    {
        title: "Substitute employee",
        company_name: "Temp Team",
        icon: temp,
        iconBg: "#E6DEDD",
        date: "July 2019 - Mar 2020",
        points: [
            "Packing, Quality check, Cleaning",
            "Worked with many different teams since working as a substitute employee for many companies",
        ],
    },
    {
        title: "Package employee",
        company_name: " Danpo A/S",
        icon: danpo,
        iconBg: "#E6DEDD",
        date: "July 2018 - Aug 2018",
        points: [
            "Packed Chiken into packaging trays.",
            "Responsible for cleaning workarea.",
            "Qulity checking the packing and chicken.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Drones in Search and Rescue missions",
        description:
            "The primary objective of this project is to develop an autonomous drone that can navigate to a specific target while avoiding any obstacles encountered on its route.",
        tags: [
            {
                name: "Unity",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "green-text-gradient",
            },
        ],
        image: drone,
        privateRepo: false,
        source_code_link: "https://github.com/D-Kuma-C/P6---Drones-in-SAR",
    },
    {
        name: "Compiler",
        description:
            "The primary objective of this project was to design and construct a compiler from scratch, thereby enabling the group to establish their own programming language.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
            {
                name: "Antlr",
                color: "pink-text-gradient",
            },
        ],
        image: noImage,
        privateRepo: false,
        source_code_link: "https://github.com/D-Kuma-C/P4-Emotional-Damage",
    },
    {
        name: "Web Portfolio",
        description:
            "This very website you are looking at.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "green-text-gradient",
            },
        ],
        image: cv,
        privateRepo: false,
        source_code_link: "https://github.com/D-Kuma-C/3DWebsite",
    },
    {
        name: "Knox",
        description:
            "The objective of this project was to acquire knowledge and experience in collaborative project management across multiple teams. Within this context, my team was tasked with verifying the accuracy of \"Passages\" by utilizing diverse algorithmic methods.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "API",
                color: "pink-text-gradient",
            },
            {
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Entity Framework",
                color: "blue-text-gradient",
            },
        ],
        image: knox,
        privateRepo: false,
        source_code_link: "https://github.com/Knox-AAU/FunctionalityLayer_FactChecker",
    },
    {
        name: "ABM",
        description:
            "The primary objective of this project was to provide a practical solution to a company's predicament. To accomplish this, our group collaborated with Art by Me.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Entity Framework",
                color: "green-text-gradient",
            },
            {
                name: "Blazor",
                color: "pink-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
        ],
        image: noImage,
        privateRepo: true,
        source_code_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };