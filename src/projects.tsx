import { TimelineItemStruct } from "./types/types";

import SimpleShopping from "./img/software/simpleshopping/1.png";
import EXIFChart from "./img/software/exifchart/1.png";
import chemlab from "./img/software/chemlab/1.png";
import covid from "./img/software/covid/1.png";
import studiov from "./img/software/studiov/1.png";
import computercheck from "./img/software/computercheck/1.png";
import eoc from "./img/software/eoc/1.png";
import paradestate from "./img/software/paradestate/1.png";
import discord from "./img/software/discord/1.png";
import CustomTimelineImage from "./components/CustomTimelineImage";
import TimelineComponent from "./components/Timeline/TimelineComponent";

import { faChrome, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";

const generateText = (text: string[]) =>
    text.map((line, index) => (
        <Typography key={index} sx={{ textAlign: "justify" }}>{line}</Typography>
    ));

export const projects: TimelineItemStruct[] = [
    {
        id: "discord",
        type: "software",

        date: "December 2017",
        title: "Discord Bot",
        description:
            "A Discord bot with admin functionality, as well as game-specific commands and a scoring system.",
        image: <CustomTimelineImage src="/img/software/discord/1.png" />,
        totalImages: 1,
        techs: ["NodeJS", "MySQL"],
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/DiscordTPF"],
            website: [],
        },
    },
    {
        id: "studiov",
        type: "software",
        date: "November 2019",
        title: "Logistics management system",
        description:
            "A logistics management system to help club members keep track of camera equipment easily.",
        image: <CustomTimelineImage src="/img/software/studiov/1.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: [],
            website: ["https://vjcstudiov.com"],
        },
    },
    {
        id: "covid",
        type: "software",
        date: "April 2020",
        title: "COVID-19 interactive grapher",
        description:
            "A web application to help users visualize COVID-19 data, with support for graphs using custom axes and plots.",
        image: <CustomTimelineImage src="/img/software/covid/1.png" />,
        totalImages: 1,
        techs: ["JavaScript", "Pug", "ExpressJS", "FusionCharts"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/covidgraphs"],
            website: ["https://covid.marcussoh.com"],
        },
    },
    {
        id: "chemlab",
        type: "software",
        date: "April 2020",
        title: "2D Chemistry Lab",
        description:
            "A 2D chemistry lab supporting basic visualization of chemical reactions as tested in the A Level syllabus.",
        image: <CustomTimelineImage src="/img/software/chemlab/1.png" />,
        totalImages: 1,
        techs: ["JavaScript", "Pug", "ExpressJS"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Stopped development",
        links: {
            github: ["https://github.com/HollaG/gce-a-chemistrypractical"],
            website: ["https://chemprac.marcussoh.com"],
        },
    },
    {
        id: "paradestate",
        type: "software",
        date: "June 2021",
        title: "SAF Parade State Generator",
        description:
            "A web application to help keep track of personnel in the SAF, reducing the hassle of manually entering data.",
        image: <CustomTimelineImage src="/img/software/paradestate/1.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: [],
            website: [],
        },
    },
    {
        id: "computercheck",
        type: "software",
        date: "August 2021",
        title: "ComputerCheck",
        description:
            "A tool to gather information about laptops and monitors in one place, making it easier to search across the different retailer sites.",
        image: <CustomTimelineImage src="/img/software/computercheck/1.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/computercheck"],
            website: ["https://sgpcs.shop"],
        },
    },
    {
        id: "exifchart",
        type: "software",
        date: "October 2021",
        title: "EXIFChart",
        description:
            "A web application to help users analyze and chart the EXIF data of a batch of images.",
        image: <CustomTimelineImage src="/img/software/exifchart/1.png" />,
        totalImages: 1,
        techs: ["React", "TypeScript", "Tailwind", "ChartJS"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/exifchart"],
            website: ["https://exifchart.com"],
        },
    },
    {
        id: "eoc",
        type: "software",
        date: "October 2021",
        title: "SAF electronic Operation Checklists",
        description:
            "A web application to complete vehicluar operation checklists online, reducing paper wastage.",
        image: <CustomTimelineImage src="/img/software/eoc/1.png" />,
        totalImages: 1,
        techs: ["React", "Material-UI", "TypeScript", "MongoDB", "NodeJS"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "In development",
        links: {
            github: [],
            website: [],
        },
    },
    {
        id: "simpleshopping",
        type: "software",
        date: "November 2021",
        title: "SimpleShopping",
        description:
            "A chrome extension to aid users in their online shopping journey, with multiple quality-of-life features.",
        image: <CustomTimelineImage src="/img/software/simpleshopping/1.png" />,
        totalImages: 5,
        techs: ["React", "TypeScript", "Tailwind"],
        icon: <FontAwesomeIcon icon={faChrome} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/simpleshopping"],
            website: [
                "https://chrome.google.com/webstore/detail/simpleshopping/plnplpfflofeemhiakppmjmmkbicdecb?hl=en&authuser=0",
            ],
        },
        overview: generateText([
            ` The idea for this project came about when I was shopping for
        one of the big monthly sales. I realised that it was tedious
        to manually copy-paste my search term into each e-commerce
        website manually.`,
            `Since I had not created a chrome extension before, I thought
        this would be a good way to get my feet wet.`,
            `Putting it on the chrome extension store also allows others
        to save time doing their own shopping.`,
        ]),

        goals: generateText([
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.`,
        ]),
    },
];
