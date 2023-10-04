//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass, FaNpm,
    FaBuffer, FaBootstrap, FaGitAlt } from "react-icons/fa"
import { SiTypescript, SiJson, SiMysql, SiMarkdown, SiPhp, 
    SiGatsby, SiCanva, SiVisualstudiocode, SiMongodb, SiFigma, 
    SiSequelize, SiApache } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { HiTemplate } from "react-icons/hi"

const Technologies = {
    json:{
        name:"JSON",
        icon: SiJson()
    },
    html:{
        name:"HTML",
        icon: FaHtml5()
    },
    ejs:{
        name:"EJS",
        icon:HiTemplate()
    },
    css:{
        name:"CSS",
        icon: FaCss3Alt()
    },
    sass:{
        name:"SASS",
        icon: FaSass()
    },
    js:{
        name:"JavaScript",
        icon: FaJsSquare()
    },
    ts:{
        name:"TypeScript",
        icon: SiTypescript()
    },
    react:{
        name:"React",
        icon: FaReact()
    },
    nextjs:{
        name:"NextJS",
        icon: TbBrandNextjs()
    },
    nodejs:{
        name:"NodeJS",
        icon: FaNodeJs()
    },
    php:{
        name:"PHP",
        icon: SiPhp()
    },
    bootstrap:{
        name:"Bootstrap",
        icon: FaBootstrap()
    },
    mysql:{
        name:"MYSQL",
        icon: SiMysql()
    },
    mongodb:{
        name:"MongoDB",
        icon: SiMongodb()
    },
    sequelize:{
        name:"Sequelize",
        icon: SiSequelize()
    },
    vsc:{
        name:"Visual Studio Code",
        icon: SiVisualstudiocode()
    },
    resources:{
        name:"Recursos web",
        icon: FaBuffer()
    },
    git:{
        name:"GIT",
        icon: FaGitAlt()
    },
    npm:{
        name:"NPM",
        icon: FaNpm()
    },
    figma:{
        name:"Figma",
        icon: SiFigma()
    },
    canva:{
        name:"Canva",
        icon: SiCanva()
    },
    markdown:{
        name:"Markdown",
        icon: SiMarkdown()
    },
    gatsby:{
        name:"Gatsby",
        icon: SiGatsby()
    },
    apache:{
        name:"Apache",
        icon: SiApache()
    }
}

export default Technologies