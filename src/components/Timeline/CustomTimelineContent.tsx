import { Box, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";
import websiteImg from "../img/default_website.jpg";
import CustomTimelineImage from "../CustomTimelineImage";
import Zoom from "react-reveal/Zoom";
import { ReactElement } from "react";
import TechBadge from "../LanguageBadge";
import LanguageBadge from "../LanguageBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const CustomTimelineContent: React.FC<{ entry: TimelineItemStruct }> = ({
    entry,
}) => {
    const openner = (evt: React.MouseEvent<SVGSVGElement, MouseEvent>, link: string) => {
        evt.stopPropagation()
        window.open(link, "_blank")
    }
    return (
        <>
            {entry.image}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {entry.techs.map((tech: string, index: number) => (
                    <LanguageBadge key={index} tech={tech} />
                ))}
            </Box>
            <Box sx={{ px: 2, pt: 1, textAlign: "center" }}>
                <Typography> {entry.description} </Typography>
            </Box>
            {/* <Box sx={{textAlign: 'center'}}> 
                Expand <FontAwesomeIcon size="xs" icon={faChevronDown}/>

            </Box> */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {entry.links.github &&
                    entry.links.github.map((link: string, index: number) => (
                        <FontAwesomeIcon
                            key={index}
                            size="2x"
                            icon={faGithub}
                            color="#181717"
                            style={{margin: "0.5rem", cursor: 'pointer'}}
                            onClick={(evt) => openner(evt, link)}
                        />
                    ))}
                {entry.links.website &&
                    entry.links.website.map((link: string, index: number) => (
                        <FontAwesomeIcon
                            key={index}
                            size="2x"
                            icon={faGlobe}
                            color=""
                            style={{margin: "0.5rem",  cursor: 'pointer'}}
                            onClick={(evt) => openner(evt, link)}

                        />
                    ))}
            </Box>
        </>
    );
};

export default CustomTimelineContent;
