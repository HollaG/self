import { Box, Container, Typography } from "@mui/material";
import LanguageBadge from "../../components/LanguageBadge";
import Links from "../../components/Links";
import { TimelineItemStruct } from "../../types/types";
import Gallery from "./Gallery";

const Heading: React.FC<{
    entry: TimelineItemStruct | null;
}> = ({ entry }) => {
    if (!entry) return <></>;
    return (
        <Box>
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
