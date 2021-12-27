import { Box, Button, Container, Theme, Typography } from "@mui/material";
import { createRef, ReactElement, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router";
import { projects } from "../../projects";
import { SectionType, TimelineItemStruct } from "../../types/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactMarkdown from "react-markdown";
import LanguageBadge from "../../components/LanguageBadge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faCaretLeft,
    faChevronLeft,
    faChevronRight,
    faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Gallery from "./Gallery";
import Wrapper from "../../components/Layout/Wrapper";
import Heading from "./Heading";
import Navigator from "./Navigator";
import Content from "./Content";

const useStyles = makeStyles((theme: Theme) => ({
    wrapperLeft: {
        position: "fixed",
        top: 0,
        bottom: 0,
        padding: "1rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 20,
        cursor: "pointer",
        "&:hover": {
            "& $tooltipLeft": { opacity: 1, left: "100%" },
            "& $navIcon": { transform: "scale(1.2)" },
        },
    },
    tooltipLeft: {
        position: "absolute",
        wordWrap: "unset",
        left: "50%",
        opacity: 0,
        transition: "all 0.3s ease-in-out",
    },
    // TODO: learn to reuse styles
    wrapperRight: {
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        padding: "1rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 20,
        cursor: "pointer",
        "&:hover": {
            "& $tooltipRight": { opacity: 1, right: "100%" },
            "& $navIcon": { transform: "scale(1.2)" },

        },
    },
    tooltipRight: {
        position: "absolute",
        wordWrap: "unset",
        right: "50%",
        opacity: 0,
        transition: "all 0.3s ease-in-out",
    },
    navIcon: {
        transition: "all 0.3s ease-in-out",

    }
}));
const Project = () => {

    const classes = useStyles();
    const params = useParams();

    const [project, setProject] = useState<TimelineItemStruct | null>(null);
    const [adjacentProjects, setAdjacentProjects] = useState<{
        prev: TimelineItemStruct | null;
        next: TimelineItemStruct | null;
    }>({ prev: null, next: null });

    const [projectIndex, setProjectIndex] = useState(0);
    useEffect(() => {        
        const foundProjectIndex = projects.findIndex(
            (p) => p.id === params.project
        );

        if (foundProjectIndex !== -1) {
            setProject(projects[foundProjectIndex]);
            setProjectIndex(foundProjectIndex);

            let prevProject: TimelineItemStruct;
            let nextProject: TimelineItemStruct;
            if (foundProjectIndex === 0) {
                prevProject = projects[projects.length - 1];
            } else {
                prevProject = projects[foundProjectIndex - 1];
            }
            if (foundProjectIndex === projects.length - 1) {
                nextProject = projects[0];
            } else {
                nextProject = projects[foundProjectIndex + 1];
            }

            setAdjacentProjects({
                prev: prevProject,
                next: nextProject,
            })
        }
    }, [project, params.project]);

    // Obtain the project's sections and map them each to a ref
    // https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
    const sections: string[] = Object.keys(project?.detailed || []);
    const sectionRefs = useRef<Array<HTMLElement | null>>([]);


    const navigate = useNavigate();

    if (!project) return <></>;

    const handleNavigate = (direction: "next" | "prev") => {
        let newProjectIndex: number;

        
        let newProject = adjacentProjects[direction];
        if (direction === "next") {
            // setProjectIndex((prev) => prev + 1);
            // if (projectIndex === projects.length - 1) {
            //     newProjectIndex = 0;
            // } else {
            //     newProjectIndex = projectIndex + 1;
            // }
        } else {
            // setProjectIndex((prev) => prev - 1);
            // if (projectIndex === 0) {
            //     newProjectIndex = projects.length - 1;
            // } else {
            //     newProjectIndex = projectIndex - 1;
            // }
        }
        let url = `/projects/${encodeURIComponent(
            newProject!.id
        )}`;
        navigate(url);
        setProject(newProject);
        
    };

    return (
        <>
            {/* <Gallery entry={project} /> */}
            <Box
                onClick={() => handleNavigate("prev")}
                className={classes.wrapperLeft}
                display={{ xs: "none", md: "flex" }}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="#444444"
                    size="2x"
                    className={classes.navIcon}
                />
                <Typography className={classes.tooltipLeft} variant="tooltip">
                    {adjacentProjects.prev?.title}
                </Typography>
            </Box>
            <Box
                onClick={() => handleNavigate("next")}
                className={classes.wrapperRight}
                display={{ xs: "none", md: "flex" }}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#444444"
                    size="2x"
                    className={classes.navIcon}

                />
                <Typography className={classes.tooltipRight} variant="tooltip">
                    {adjacentProjects.next?.title}
                </Typography>
            </Box>
            <Wrapper
                upper={<Heading entry={project} />}
                content={
                    <Content
                        entry={project}
                        sections={sections}
                        sectionRefs={sectionRefs}
                    />
                }
                nav={
                    <Navigator
                        entry={project}
                        sections={sections}
                        sectionRefs={sectionRefs}
                    />
                }
            />
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
