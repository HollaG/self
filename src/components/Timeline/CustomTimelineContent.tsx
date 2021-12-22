import { Box, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";
import websiteImg from "../img/default_website.jpg";
import CustomTimelineImage from "../CustomTimelineImage";
import Zoom from "react-reveal/Zoom";
import { ReactElement } from "react";
import TechBadge from "../LanguageBadge";
import LanguageBadge from "../LanguageBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomTimelineContent: React.FC<{ entry: TimelineItemStruct }> = ({
    entry,
}) => {
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
        </>
    );
};

export default CustomTimelineContent;
