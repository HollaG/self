import { Container, Divider, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";

const Content: React.FC<{ entry: TimelineItemStruct | null }> = ({ entry }) => {
    return (
        <Container maxWidth="md">
            {entry?.overview && (
                <>
                    <Divider>
                        <Typography sx={{m:2}} variant="h4">
                            Project Overview
                        </Typography>
                    </Divider>
                    {entry?.overview}
                </>
            )}
            {entry?.goals && (
                <>
                    <Divider>
                        <Typography sx={{m:2}} variant="h4">
                            Project Goals
                        </Typography>
                    </Divider>

                    {entry.goals}
                </>
            )}
            {entry?.testimonials && (
                <>
                    <Typography sx={{ m: 2 }} variant="h4">
                        Testimonials
                    </Typography>

                    {entry.testimonials}
                </>
            )}
        </Container>
    );
};

export default Content;
