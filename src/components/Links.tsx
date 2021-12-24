import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";
import { TimelineItemStruct } from "../types/types";

const Links: React.FC<{ entry: TimelineItemStruct }> = ({ entry }) => {
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
                    <Box>
                        <Button
                            sx={{ mr: 1, mb: 1, backgroundColor: "#181717" }}
                            size="small"
                            variant="contained"
                            startIcon={<FontAwesomeIcon icon={faGithub} />}
                            onClick={(evt) => openner(evt, link)}
                        >
                            Github
                        </Button>
                    </Box>
                ))}
            {entry.links.website &&
                entry.links.website.map((link: string, index: number) => (
                    <Button
                        sx={{ mr: 1, mb:1 }}
                        size="small"
                        variant="contained"
                        color="primary"
                        startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                    >
                        Website
                    </Button>
                ))}
        </Box>
    );
};

export default Links;
