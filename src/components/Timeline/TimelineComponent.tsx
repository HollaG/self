import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

import { FC, useState } from "react";
import { TimelineItemStruct } from "../../types/types";
import CustomTimelineContent from "./CustomTimelineContent";

import SimpleShopping from "../../img/software/simpleshopping.jpg";
import EXIFChart from "../../img/software/exifchart.png";
import chemlab from "../../img/software/chemlab.png";
import covid from "../../img/software/covid.png";
import studiov from "../../img/software/studiov.png";
import computercheck from "../../img/software/computercheck.png";
import eoc from "../../img/software/eoc.png";
import paradestate from "../../img/software/paradestate.png";
import discord from "../../img/software/discord.png";
import CustomTimelineImage from "../../components/CustomTimelineImage";
import CustomTimelineHeader from "./CustomTimelineHeader";
import CustomTimelineHeaderSmall from "./CustomTimelineHeaderSmall";
import CustomTimelineContentWrapper from "./CustomTimelineContentWrapper";

const TimelineComponent: React.FC<{ entries: TimelineItemStruct[] }> = ({
    entries,
}) => {
    const theme = useTheme();
    const isBig = useMediaQuery(theme.breakpoints.up("sm"));

    
    return (
        <>
            <Timeline position={isBig ? "alternate" : "right"}>
                {entries &&
                    entries.map((entry, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ display: isBig ? "block" : "none" }}
                            >
                                {isBig && (
                                    <CustomTimelineHeader entry={entry} />
                                )}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    {entry.icon}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                
                            >
                                <CustomTimelineContentWrapper entry={entry}>
                                    {!isBig && (
                                        <CustomTimelineHeaderSmall
                                            entry={entry}
                                        />
                                    )}
                                    <CustomTimelineContent entry={entry} />
                                </CustomTimelineContentWrapper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
            </Timeline>
        </>
    );
};

export default TimelineComponent;
