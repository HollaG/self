import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";
import { TimelineItemStruct } from "../types/types";
import { openInNewTab } from "../util/utils";

const Links: React.FC<{ entry: TimelineItemStruct }> = ({ entry }) => {
    const openner = (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        link: string
    ) => {
        evt.stopPropagation();        
        openInNewTab(link)
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            {entry.links.github &&
                entry.links.github.map((link: string, index: number) => (
                    <Button
                        key={index}
                        sx={{ mr: 1, mb: 1, backgroundColor: "#181717" }}
                        size="small"
                        variant="contained"
                        startIcon={<FontAwesomeIcon icon={faGithub} />}
                        onClick={(evt) => openner(evt, link)}
                    >
                        Github
                    </Button>
                ))}
            {entry.links.website &&
                entry.links.website.map((link: string, index: number) => (
                    <Button
                        key={index}
                        sx={{ mr: 1, mb: 1 }}
                        size="small"
                        variant="contained"
                        color="primary"
                        startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                        onClick={(evt) => openner(evt, link)}
                    >
                        Website
                    </Button>
                ))}
        </Box>
    );
};

export default Links;
