import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { ImGithub } from "react-icons/im";

const primaryStyle = {
    "margin-top": "30px",
    "margin-left": "30px",
    "margin-bottom": "30px",
    "text-align": "center"
}
const designSpan = {
    "font-size": "30px",
    "margin-left": "30px",
    "margin-right": "30px",
}
const Skills = () => {
  return (
    <div>
        <h1 style={{"font-weight":"bold", "text-align": "center"}}>Skills</h1>
        <div style={{"text-align": "center"}}>...............................................................................</div>
        <div style={primaryStyle}>
        <span style={designSpan}><ImHtmlFive /></span>
        <span style={designSpan}><DiCss3 /></span>
        <span style={designSpan}><FaBootstrap /></span>
        <span style={designSpan}><IoLogoJavascript /></span>
        <span style={designSpan}><FaReact /></span>
        <span style={designSpan}><SiRedux /></span>
        <span style={designSpan}><ImGithub /></span>
        </div>
    </div>
  )
}

export default Skills