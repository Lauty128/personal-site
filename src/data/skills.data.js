//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass,
    FaFigma, FaGitAlt, FaNpm,
    FaBuffer, FaBootstrap  } from "react-icons/fa"
import { SiCanva, SiVisualstudiocode, SiPhp, SiTypescript, SiMysql, SiSequelize, SiMongodb } from "react-icons/si"


//------------------------------------------------
export const technologies = [
    {
        id:0,
        name:"NodeJS",
        icon: FaNodeJs()
    },
    {
        id:1,
        name:"ReactJS",
        icon: FaReact()
    },
    {
        id:2,
        name:"Sass",
        icon: FaSass()
    },
    {
        id:3,
        name:"Bootstrap",
        icon: FaBootstrap()
    }
]

export const languages = [
    {
        id:0,
        name:"Html",
        icon: FaHtml5()
    },
    {
        id:1,
        name:"Css",
        icon: FaCss3Alt()
    },
    {
        id:2,
        name:"JavaScript",
        icon: FaJsSquare()
    },
    {
        id:3,
        name:"TypeScript",
        icon: SiTypescript()
    },
    {
        id:4,
        name:"PHP",
        icon: SiPhp()
    }
]

export const design = [
    {
        id:0,
        name:"Figma",
        icon: FaFigma()
    },
    {
        id:1,
        name:"Canva",
        icon: SiCanva()
    }
]

export const dataBases = [
    {
        id:0,
        name:"MYSQL",
        icon: SiMysql()
    },
    {
        id:1,
        name:"MongoDB",
        icon: SiMongodb()
    },
    {
        id:2,
        name:"Sequelize",
        icon: SiSequelize()
    }
]

export const tools = [
    {
        id:0,
        name:"Recursos Web",
        icon: FaBuffer()
    },
    
    {
        id:3,
        name:"Npm",
        icon: FaNpm()
    },
    {
        id:4,
        name:"VsCode",
        icon: SiVisualstudiocode()
    },
    {
        id:5,
        name:"Git",
        icon: FaGitAlt()
    }
]