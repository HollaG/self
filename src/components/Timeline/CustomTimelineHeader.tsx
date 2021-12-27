import { Box, Chip, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";
import LanguageBadge from "../LanguageBadge";

const CustomTimelineHeader: React.FC<{ entry: TimelineItemStruct }> = ({
    entry,
}) => {
    let color:"success"|"error"|"primary" = 'success'
    if (entry.status === 'Stopped development') color = 'error'
    if (entry.status === 'In development') color = 'primary'
    let chip = <Chip size="small" label={entry.status} color={color}/>;
    return (
        <>
            {entry.date}

            <Typography variant="subtitle2">{entry.title} {chip}</Typography>
            
            <Box
                sx={{
                    // display: "flex",
                    // maxWidth: "300px",
                    // ml: "auto",
                    // flexWrap: "wrap",
                    // justifyContent: "end",
                }}
            >
                {/* {entry.techs.map((tech: string, index: number) => (
                    <LanguageBadge key={index} tech={tech} />
                ))} */}
            </Box>
        </>
    );
};

export default CustomTimelineHeader;
