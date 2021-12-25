import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from "@mui/lab";
import { Box, Container, Divider, Typography } from "@mui/material";
import LanguageBadge from "../../components/LanguageBadge";
import NegativeOffset from "../../components/Layout/NegativeOffset";
import TimelineWrapper from "./TimelineWrapper";

const Content: React.FC<{
    softwareRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}> = ({ softwareRefs }) => {
    const educations = [
        {
            date: "2020 - now",
            location: "Serving NS",
        },
        {
            date: "Jan 2020 - Mar 2020",
            location: "Challenger part-time",
        },
        {
            date: "2018 - 2019",
            location: "Victoria Junior College",
            description: "",
        },
        {
            date: "2014 - 2017",
            location: "Anglican High School",
        },
    ];
    const skills = {
        frontend: ["React", "Bootstrap", "Material-UI", "Tailwind"],
        backend: ["NodeJS", "ExpressJS", "TypeScript", "JavaScript", "Pug"],
        database: ["MongoDB", "MySQL"],
        libraries: ["ChartJS", "FusionCharts"],
    };
    return (
        <Container
            maxWidth="xl"
            sx={
                {
                    // mt: -4,
                }
            }
        >
            <NegativeOffset index={0} refArray={softwareRefs}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="projectContentHeader">
                        Skills
                    </Typography>

                    <Divider
                        sx={{
                            my: 2,
                            mx: "auto",
                            borderBottomWidth: "thick",
                            maxWidth: "400px",
                        }}
                    />
                    <Box>
                        {skills.frontend.map((tech: string, index: number) => (
                            <LanguageBadge key={index} tech={tech} />
                        ))}
                    </Box>
                    <Box>
                        {skills.backend.map((tech: string, index: number) => (
                            <LanguageBadge key={index} tech={tech} />
                        ))}
                    </Box>
                    <Box>
                        {skills.database.map((tech: string, index: number) => (
                            <LanguageBadge key={index} tech={tech} />
                        ))}
                    </Box>
                    <Box>
                        {skills.libraries.map((tech: string, index: number) => (
                            <LanguageBadge key={index} tech={tech} />
                        ))}
                    </Box>
                </Box>
            </NegativeOffset>
            <NegativeOffset index={1} refArray={softwareRefs}>
                <TimelineWrapper />
            </NegativeOffset>
            <NegativeOffset index={2} refArray={softwareRefs}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="projectContentHeader">
                        Experience
                    </Typography>

                    <Divider
                        sx={{
                            my: 2,
                            mx: "auto",
                            borderBottomWidth: "thick",
                            maxWidth: "400px",
                        }}
                    />
                    <Timeline>
                        {educations.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    {education.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                        {education.location}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </NegativeOffset>
        </Container>
    );
};

export default Content;
