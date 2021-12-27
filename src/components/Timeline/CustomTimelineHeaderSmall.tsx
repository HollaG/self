import { Box, Chip, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";

const CustomTimelineHeaderSmall: React.FC<{ entry: TimelineItemStruct }> = ({
    entry,
}) => {
    let color:"success"|"error"|"primary" = 'success'
    if (entry.status === 'Stopped development') color = 'error'
    if (entry.status === 'In development') color = 'primary'
    let chip = <Chip size="small" label={entry.status} color={color}/>;
    return (
        <Box sx={{mb: 1}}>
            {entry.date}
            <Typography variant="subtitle2">{entry.title} </Typography>
            {chip}
        </Box>
    );
};

export default CustomTimelineHeaderSmall;
