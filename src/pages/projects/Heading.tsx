import { Box, Container, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";
import Gallery from "./Gallery";

const Heading: React.FC<{
    entry: TimelineItemStruct | null;
}> = ({ entry }) => {
    return (
        <Box>
            <Container maxWidth="xl" sx={{mb: 4}}>
                <Typography variant="projectHeader" display="block">
                    {entry?.title}
                </Typography>

            </Container>
            <Gallery entry={entry} />
        </Box>
    );
};

export default Heading;
