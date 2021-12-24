import { Box, Button, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";
import websiteImg from "../img/default_website.jpg";
import CustomTimelineImage from "../CustomTimelineImage";
import Zoom from "react-reveal/Zoom";
import { ReactElement } from "react";
import TechBadge from "../LanguageBadge";
import LanguageBadge from "../LanguageBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faExternalLinkAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Links from "../Links";
const CustomTimelineContent: React.FC<{ entry: TimelineItemStruct }> = ({
    entry,
}) => {
    const openner = (
        evt:
            | React.MouseEvent<SVGSVGElement, MouseEvent>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>,
        link: string
    ) => {
        evt.stopPropagation();
        window.open(link, "_blank");
    };
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
            <Box sx={{ px: 2, pt: 1, mb: 2, textAlign: "center" }}>
                <Typography> {entry.description} </Typography>
            </Box>
            {/* <Box sx={{textAlign: 'center'}}> 
                Expand <FontAwesomeIcon size="xs" icon={faChevronDown}/>

            </Box> */}
            <Links entry={entry}/>
        </>
    );
};

export default CustomTimelineContent;
