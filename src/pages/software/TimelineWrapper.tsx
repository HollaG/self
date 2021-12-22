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
import { projects } from "../../projects";

const entries: TimelineItemStruct[] = projects.filter(proj => proj.type === 'software').reverse();
const TimelineWrapper = () => {

    
    return <TimelineComponent entries={entries} />;
};



export default TimelineWrapper;
