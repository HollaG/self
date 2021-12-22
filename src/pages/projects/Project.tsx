import { Box, Button, Container, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import { projects } from "../../projects";
import { TimelineItemStruct } from "../../types/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactMarkdown from "react-markdown";
import LanguageBadge from "../../components/LanguageBadge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Project = () => {
    const params = useParams();
    console.log(params);
    const [project, setProject] = useState<TimelineItemStruct | null>(null);

    const [images, setImages] = useState<ReactElement[]>([]);
    useEffect(() => {
        const foundProject = projects.find((p) => p.id === params.project);
        if (foundProject) {
            setProject(foundProject);
            const numImages = foundProject.totalImages;
            const foundImages = [];
            for (let i = 1; i <= numImages; i++) {
                foundImages.push(
                    <img
                        key={i}
                        src={`/img/${foundProject.type}/${foundProject.id}/${i}.png`}
                        alt={foundProject.title}
                    />
                );
            }
            setImages(foundImages);
        }
        //  else setProject("none");
    }, []);

    return (
        <Container maxWidth="sm" sx={{ py: 2 }}>
            {project && (
                <>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        {project.title}
                    </Typography>
                    <Carousel showThumbs={false}>{images}</Carousel>
                    <Box sx={{ mt:2, display: "flex", justifyContent: "space-between", alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <Box sx={{  mx: 1 }}>
                            {project.techs.map(
                                (tech: string, index: number) => (
                                    <LanguageBadge key={index} tech={tech} />
                                )
                            )}
                        </Box>
                        <Box sx={{ mx: 1 }}>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                startIcon={
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                }
                            >
                                Website
                            </Button>
                            <Button
                                sx={{ ml: 1, backgroundColor: "#181717" }}
                                size="small"
                                variant="contained"
                                startIcon={<FontAwesomeIcon icon={faGithub} />}
                            >
                                Github
                            </Button>
                        </Box>
                    </Box>
                    {project.overview && (
                        <>
                            <Typography variant="h6">
                                Project Overview
                            </Typography>

                            {project.overview}
                        </>
                    )}
                    {project.goals && (
                        <>
                            <Typography variant="h6">Project Goals</Typography>

                            {project.goals}
                        </>
                    )}
                    {project.testimonials && (
                        <>
                            <Typography variant="h6">Testimonials</Typography>

                            {project.testimonials}
                        </>
                    )}
                </>
            )}
        </Container>
    );
};

export default Project;
