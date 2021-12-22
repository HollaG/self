import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import { FC } from "react";
import { TimelineItemStruct } from "../../types/types";
import CustomTimelineContent from "../../components/Timeline/CustomTimelineContent";

import SimpleShopping from '../../img/software/simpleshopping.jpg';
import EXIFChart from '../../img/software/exifchart.png'
import chemlab from '../../img/software/chemlab.png'
import covid from '../../img/software/covid.png'
import studiov from '../../img/software/studiov.png'
import computercheck from '../../img/software/computercheck.png'
import eoc from '../../img/software/eoc.png'
import paradestate from '../../img/software/paradestate.png'
import discord from '../../img/software/discord.png'
import CustomTimelineImage from "../../components/CustomTimelineImage";
import TimelineComponent from "../../components/Timeline/TimelineComponent";

import { faChrome, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const entries: TimelineItemStruct[] = [
    {
        date: "December 2017",
        title: "Discord Bot",
        description:
            "A Discord bot with admin functionality, as well as game-specific commands and a scoring system.",
        image: <CustomTimelineImage src={discord}/>,
        techs: ["NodeJS", "MySQL"],
        icon: <FontAwesomeIcon icon={faNodeJs}/>,
        status: "Completed"
    },
    {
        date: "November 2019",
        title: "Logistics management system",
        description:
            "A logistics management system to help club members keep track of camera equipment easily.",
            image: <CustomTimelineImage src={studiov}/>,
            techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Completed"

    },
    {
        date: "April 2020",
        title: "COVID-19 interactive grapher",
        description: "A web application to help users visualize COVID-19 data, with support for graphs using custom axes and plots.",
        image: <CustomTimelineImage src={covid}/>,
        techs: ["JavaScript", "Pug", "ExpressJS", "FusionCharts"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Completed"
    },
    {
        date: "April 2020",
        title: "2D Chemistry Lab",
        description: "A 2D chemistry lab supporting basic visualization of chemical reactions as tested in the A Level syllabus.",
        image: <CustomTimelineImage src={chemlab}/>,
        techs: ["JavaScript", "Pug", "ExpressJS"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Stopped development"
    },
    {
        date: "June 2021",
        title: "SAF Parade State Generator",
        description: "A web application to help keep track of personnel in the SAF, reducing the hassle of manually entering data.",
        image: <CustomTimelineImage src={paradestate}/>,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Completed"

    },
    {
        date: "August 2021",
        title: "ComputerCheck",
        description: "A tool to gather information about laptops and monitors in one place, making it easier to search across the different retailer sites.",
        image: <CustomTimelineImage src={computercheck}/>,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Completed"
    },
    {
        date: "October 2021",
        title: "EXIFChart",
        description: "A web application to help users analyze and chart the EXIF data of a batch of images.",
        image: <CustomTimelineImage src={EXIFChart}/>,
        techs: ["React", "TypeScript", "Tailwind", "ChartJS"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "Completed"
    }, 
    {
        date: "October 2021",
        title: "SAF electronic Operation Checklists",
        description: "A web application to complete vehicluar operation checklists online, reducing paper wastage.",
        image: <CustomTimelineImage src={eoc}/>,
        techs: ["React", "Material-UI", "TypeScript", "MongoDB", "NodeJS"], 
        icon: <FontAwesomeIcon icon={faGlobe}/>,
        status: "In development"

    },
    {
        date: "November 2021",
        title: "SimpleShopping",
        description: "A chrome extension to aid users in their online shopping journey, with multiple quality-of-life features.",
        image: <CustomTimelineImage src={SimpleShopping}/>,
        techs: ["React", "TypeScript", "Tailwind"], 
        icon: <FontAwesomeIcon icon={faChrome}/>,
        status: "Completed"

    }
].reverse();
const TimelineWrapper = () => {

    
    return <TimelineComponent entries={entries} />;
};



export default TimelineWrapper;
