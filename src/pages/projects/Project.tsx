import { Box, Button, Container, Typography } from "@mui/material";
import { createRef, ReactElement, useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import { projects } from "../../projects";
import { SectionType, TimelineItemStruct } from "../../types/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactMarkdown from "react-markdown";
import LanguageBadge from "../../components/LanguageBadge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Gallery from "./Gallery";
import Wrapper from "../../components/Layout/Wrapper";
import Heading from "./Heading";
import Navigator from "./Navigator";
import Content from "./Content";
const Project = () => {
    const params = useParams();
    console.log(params);
    const [project, setProject] = useState<TimelineItemStruct | null>(null);
    useEffect(() => {
        const foundProject = projects.find((p) => p.id === params.project);
        if (foundProject) {
            setProject(foundProject);
            
        }
        
    }, []);
    
    // Obtain the project's sections and map them each to a ref
    // https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
    const sections:string[] = Object.keys(project || []).filter((key) => key === "overview" || key === "goals" || key === "testimonials" || key === "technical")
    const sectionRefs = useRef<Array<HTMLElement | null>>([]);
    console.log({sections, sectionRefs})
    if (!project) return <></>;



    return (
        <>
            {/* <Gallery entry={project} /> */}
            <Wrapper upper={<Heading entry={project}/>} content={<Content entry={project} sections={sections} sectionRefs={sectionRefs}/>} nav={<Navigator entry={project} sections={sections} sectionRefs={sectionRefs}/>}/>
        </>
        // <Container maxWidth="sm" sx={{ py: 2 }}>
        //     {project && (
        //         <>
        //             <Typography variant="h4" sx={{ mb: 2 }}>
        //                 {project.title}
        //             </Typography>
        //             <Carousel showThumbs={false}>{images}</Carousel>
        //             <Box sx={{ mt:2, display: "flex", justifyContent: "space-between", alignItems: 'flex-end', flexWrap: 'wrap' }}>
        //                 <Box sx={{  mx: 1 }}>
        //                     {project.techs.map(
        //                         (tech: string, index: number) => (
        //                             <LanguageBadge key={index} tech={tech} />
        //                         )
        //                     )}
        //                 </Box>
        //                 <Box sx={{ mx: 1 }}>
        //                     <Button
        //                         size="small"
        //                         variant="contained"
        //                         color="primary"
        //                         startIcon={
        //                             <FontAwesomeIcon icon={faExternalLinkAlt} />
        //                         }
        //                     >
        //                         Website
        //                     </Button>
        //                     <Button
        //                         sx={{ ml: 1, backgroundColor: "#181717" }}
        //                         size="small"
        //                         variant="contained"
        //                         startIcon={<FontAwesomeIcon icon={faGithub} />}
        //                     >
        //                         Github
        //                     </Button>
        //                 </Box>
        //             </Box>
        //             {project.overview && (
        //                 <>
        //                     <Typography sx={{mt:1}} variant="h6">
        //                         Project Overview
        //                     </Typography>

        //                     {project.overview}
        //                 </>
        //             )}
        //             {project.goals && (
        //                 <>
        //                     <Typography sx={{mt:1}} variant="h6">Project Goals</Typography>

        //                     {project.goals}
        //                 </>
        //             )}
        //             {project.testimonials && (
        //                 <>
        //                     <Typography sx={{mt:1}} variant="h6">Testimonials</Typography>

        //                     {project.testimonials}
        //                 </>
        //             )}
        //         </>
        //     )}
        // </Container>
    );
};

export default Project;
