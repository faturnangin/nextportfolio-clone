import { Blog } from "@/types/types";
export const navConst = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        name: "Blog",
        link: "/blog"
    }
];

export const serviceConst = [
    {
        title: "Graphic Design",
        desc:"I'm all about making visuals pop. Content creation, graphics, and designs – I craft eye-catching elements that tell stories and capture attention.",
        img:"/baloon.png"
    },
    {
        title: "UI / UX Design",
        desc:"I'm the bridge between users and digital interfaces. I create designs that are easy to use and making technology feel like second nature.",
        img:"/figma3d.png"
    },
    {
        title: "Web Development",
        desc:"I turn ideas into functional websites. Coding is my canvas, and I ensure that the digital world I create is both dynamic and user-friendly.",
        img:"/code.png"
    }
]

export const blogConst:Blog[] = [
    {
        img:"/code.jpeg",
        title:"My First Blog Post",
        desc:"Hello World! I finally manage to built this personal website, its part of my 2023 resolution and im keen to share my toughts here. PS: This post is special one that you can't do read more 😜",
        time:14082023,
        content:""
    },
]
