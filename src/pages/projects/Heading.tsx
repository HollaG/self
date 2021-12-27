import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import LanguageBadge from "../../components/LanguageBadge";
import Links from "../../components/Links";
import { TimelineItemStruct } from "../../types/types";
import Gallery from "./Gallery";

const Heading: React.FC<{
    entry: TimelineItemStruct | null;
}> = ({ entry }) => {
    const navigate = useNavigate();
    if (!entry) return <></>;
    return (
        <Box>
            <Box sx={{ transition: "all 0.3s ease-in-out" }}>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    color="#444444"
                    size="lg"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                />
                {/* <Typography sx={{position: 'absolute'}} variant="tooltip"> Home </Typography> */}
            </Box>
            <Container maxWidth="xl" sx={{ mb: 4 }}>
                <Typography variant="projectHeader" display="block">
                    {entry?.title}
                </Typography>
            </Container>
            <Gallery entry={entry} />
            <Box sx={{ m: 2 }}>
                {entry.techs.map((tech: string, index: number) => (
                    <LanguageBadge key={index} tech={tech} />
                ))}
            </Box>
            <Box sx={{ m: 2 }}>
                <Links entry={entry} />
            </Box>
        </Box>
    );
};

export default Heading;
