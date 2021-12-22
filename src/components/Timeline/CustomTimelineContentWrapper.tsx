import { Box, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TimelineItemStruct } from "../../types/types";

const CustomTimelineContentWrapper: React.FC<{entry: TimelineItemStruct}> = ({ children, entry }) => {
    const [elevation, setElevation] = useState<0 | 3>(0);
    const [scale, setScale] = useState<1 | 0.925>(0.925);
    const hoverHandler = (state: "enter" | "leave") => {
        if (state === "enter") {
            setElevation(3);
            setScale(1);
        } else {
            setElevation(0);
            setScale(0.925);
        }
    };
    const navigate = useNavigate()
    
    return (
        <Box
            onMouseEnter={() => hoverHandler("enter")}
            onMouseLeave={() => hoverHandler("leave")}
            onClick={() => navigate(`/projects/${encodeURIComponent(entry.id)}`)}
            style={{cursor: 'pointer'}}
        >
            <Paper elevation={elevation} sx={{ p: 2 }}>
                <Box sx={{ transform: `scale(${scale})`, transition: "0.15s all ease" }}>
                    {children}
                </Box>
            </Paper>
        </Box>
    );
};

export default CustomTimelineContentWrapper;
