import { TimelineItemStruct } from "./types/types";


import CustomTimelineImage from "./components/CustomTimelineImage";
import TimelineComponent from "./components/Timeline/TimelineComponent";

import { faChrome, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";


const generateText = (text: string[]) =>
    text.map((line, index) =>
        line === "space" ? (
            <Box key={index} sx={{ my: 2 }} />
        ) : (
            <Typography
                key={index}
                variant="h6"
                color="#444444"
                sx={{ textAlign: "left" }}
            >
                {line}
            </Typography>
        )
    );

export const projects: TimelineItemStruct[] = [
    {
        id: "discord",
        type: "software",

        date: "December 2017",
        title: "Discord Bot",
        description:
            "A Discord bot with admin functionality, as well as game-specific commands and a scoring system.",
        image: <CustomTimelineImage src="/img/software/discord/1.png" placeholderSrc="/img/software/discord/small.png" />,
        totalImages: 1,
        techs: ["NodeJS", "MySQL"],
        icon: <FontAwesomeIcon icon={faNodeJs} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/DiscordTPF"],
            website: [],
        },
        detailed: {
            overview: generateText([
                "A Discord bot with admin functionality, as well as game-specific commands and a scoring system.",
                "The bot is written in NodeJS and uses a MySQL database.",
                "The bot also contains fun features such as a scoring system.",
                "space",
                `Project completed December 2018.`,
            ]),
        },
    },
    {
        id: "studiov",
        type: "software",
        date: "November 2019",
        title: "Logistics management system",
        description:
            "A logistics management system to help club members keep track of camera equipment easily.",
        image: <CustomTimelineImage src="/img/software/studiov/1.png" placeholderSrc="/img/software/studiov/small.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: [],
            website: ["https://vjcstudiov.com"],
        },
        detailed: {
            overview: generateText([
                `Online logistics management system for a videography studio.`,
                `Allows members to keep track of where equipment is, so as to prevent a conflict where two people borrow the same equipment.`,
                `space`,
                `Project completed March 2020.`,
            ]),
        },
    },
    {
        id: "covid",
        type: "software",
        date: "April 2020",
        title: "COVID-19 interactive grapher",
        description:
            "A web application to help users visualize COVID-19 data, with support for graphs using custom axes and plots.",
        image: <CustomTimelineImage src="/img/software/covid/1.png" placeholderSrc="/img/software/covid/small.png" />,
        totalImages: 1,
        techs: ["JavaScript", "Pug", "ExpressJS", "FusionCharts"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/covidgraphs"],
            website: ["https://covid.marcussoh.com"],
        },
        detailed: {
            overview: generateText([
                `Online graphing application for COVID-19 data, including custom graph axes and plots.`,
                `Stopped maintaining due to the annoyance of having to manually enter data every day. Additionally, at that time, the format of reports kept changing so it was difficult to implement an automated system.`,
                `space`,
                `Project completed May 2020.`,
            ]),
        },
    },
    {
        id: "chemlab",
        type: "software",
        date: "April 2020",
        title: "2D Chemistry Lab",
        description:
            "A 2D chemistry lab supporting basic visualization of chemical reactions as tested in the A Level syllabus.",
        image: <CustomTimelineImage src="/img/software/chemlab/1.png" placeholderSrc="/img/software/chemlab/small.png" />,
        totalImages: 1,
        techs: ["JavaScript", "Pug", "ExpressJS"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Stopped development",
        links: {
            github: ["https://github.com/HollaG/gce-a-chemistrypractical"],
            website: ["https://chemprac.marcussoh.com"],
        },
        detailed: {
            overview: generateText([
                `Project intended to be a 2D game-like version of a typical A-level chemistry lab.`,
                `However, there were issues with properly simulating chemical reactions, so I decided to stop working on it.`,
                `The project is functional for simple chemical reactions, however more complex reactions cause it to develop bugs.`,
                `space`,
                `Project stopped development on April 2020.`,
            ]),
        },
    },
    {
        id: "paradestate",
        type: "software",
        date: "June 2021",
        title: "SAF Parade State Generator",
        description:
            "A web application to help keep track of personnel in the SAF, reducing the hassle of manually entering data.",
        image: <CustomTimelineImage src="/img/software/paradestate/1.png" placeholderSrc="/img/software/paradestate/small.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: [],
            website: [],
        },
        detailed: {
            overview: generateText([
                `A web application for the SAF to easily keep track of personnel.`,
                `Born out of a need to reduce the errors and annoyances associated with manually updating the data for each personnel.`,
                `The application is designed to be as simple as possible, with a simple interface and a simple, intuitive workflow, with multiple rounds of user testing.`,
                `After 3 months of development, it was adopted into use by my company in the SAF.`,
                `space`,
                `Project currently being maintained.`,
            ]),
            technical: generateText([
                `Language`,
                `➟ JavaScript`,
                `space`,
                `Frontend`,
                `➟ Bootstrap 5`,
                `space`,
                `Backend`,
                `➟ NodeJS with Express`,
                `➟ MySQL`,
            ]),
        },
    },
    {
        id: "computercheck",
        type: "software",
        date: "August 2021",
        title: "ComputerCheck",
        description:
            "A tool to gather information about laptops and monitors in one place, making it easier to search across the different retailer sites.",
        image: <CustomTimelineImage src="/img/software/computercheck/1.png" placeholderSrc="/img/software/computercheck/small.png" />,
        totalImages: 1,
        techs: ["Bootstrap", "NodeJS", "ExpressJS", "Pug", "MySQL"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/computercheck"],
            website: ["https://sgpcs.shop"],
        },
        detailed: {
            overview: generateText([
                `Web scraper using Puppeteer that aggregates laptop and monitor info from sites like Courts / Best Denki / Challenger etc.`,
                `space`,
                `Project completed August 2021.`,
            ]),
            technical: generateText([
                `Language`,
                `➟ JavaScript`,
                `space`,
                `Frontend`,
                `➟ Bootstrap 5`,
                `space`,
                `Backend`,
                `➟ NodeJS with Express`,
                `➟ Puppeteer`,
                `➟ MySQL`,
            ]),
        },
    },
    {
        id: "exifchart",
        type: "software",
        date: "October 2021",
        title: "EXIFChart",
        description:
            "A web application to help users analyze and chart the EXIF data of a batch of images.",
        image: <CustomTimelineImage src="/img/software/exifchart/1.png" placeholderSrc="/img/software/exifchart/small.png" />,
        totalImages: 1,
        techs: ["React", "TypeScript", "Tailwind", "ChartJS"],

        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "Completed",
        links: {
            github: ["https://github.com/HollaG/exifchart"],
            website: ["https://exifchart.com"],
        },
        detailed: {
            overview: generateText([
                `Web app that utilizes Exifr to parse EXIF data from a batch of images.`,
                `Project had originally intended to use the new File System Access API, however due to compatability issues, I forked a library (https://github.com/HollaG/browser-fs-access) to suit my needs and used that instead.`,
                `space`,
                `Project completed October 2021.`,
            ]),
            technical: generateText([
                `Language`,
                `➟ TypeScript`,
                `space`,
                `Frontend`,
                `➟ React`,
                `➟ Tailwind`,
            ]),
        },
    },
    {
        id: "eoc",
        type: "software",
        date: "October 2021",
        title: "SAF electronic Operation Checklists",
        description:
            "A web application to complete vehicluar operation checklists online, reducing paper wastage.",
        image: <CustomTimelineImage src="/img/software/eoc/1.png" placeholderSrc="/img/software/eoc/small.png" />,
        totalImages: 1,
        techs: ["React", "Material-UI", "TypeScript", "MongoDB", "NodeJS"],
        techsBrief: ["React", "NodeJS", "MongoDB"],
        icon: <FontAwesomeIcon icon={faGlobe} />,
        status: "In development",
        links: {
            github: [],
            website: [],
        },
        detailed: {
            overview: generateText([
                `A web application for the SAF to manage vehicle maintenance checklists online, saving paper.`,
                `Online checklists also save the hassle of having to pass the paper around to get signatures from supervisors.`,
                `space`,
                `Project currently in development.`,
            ]),
            technical: generateText([
                `Language`,
                `➟ TypeScript`,
                `space`,
                `Frontend`,
                `➟ React`,
                `➟ Material UI`,
                `space`,
                `Backend`,
                `➟ NodeJS with Express`,
                `➟ MongoDB`,
            ]),
        },
    },
    {
        id: "simpleshopping",
        type: "software",
        date: "November 2021",
        title: "SimpleShopping",
        description:
            "A chrome extension to aid users in their online shopping journey, with multiple quality-of-life features.",
        image: <CustomTimelineImage src="/img/software/simpleshopping/1.png" placeholderSrc="/img/software/simpleshopping/small.png" />,
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

        detailed: {
            overview: generateText([
                `A Chrome Extension to help people search different sites without going to the actual site first, with support for batch searching.`,
                `space`,
                `Project completed November 2021.`,
            ]),

            goals: generateText([
                `➟ To decrease time spent doing repetitive searches`,
                `➟ To allow users to set up different shopping profiles for different scenarios`,
                `➟ To experiment with the Chrome Extension development workflow`,
            ]),
            technical: generateText([
                `Language`,
                `➟ TypeScript`,
                `space`,
                `Frontend`,
                `➟ React`,
                `➟ Tailwind`,
            ]),
        },
    },
];
