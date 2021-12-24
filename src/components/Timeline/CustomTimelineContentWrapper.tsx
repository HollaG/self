import { Box, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TimelineItemStruct } from "../../types/types";

const CustomTimelineContentWrapper: React.FC<{ entry: TimelineItemStruct }> = ({
    children,
    entry,
}) => {
    const [elevation, setElevation] = useState<0 | 2>(0);
    const [scale, setScale] = useState<1 | 1.01>(1);
    const hoverHandler = (state: "enter" | "leave") => {
        if (state === "enter") {
            setElevation(2);
            setScale(1.01);
        } else {
            setElevation(0);
            setScale(1);
        }
    };
    const navigate = useNavigate();

    return (
        <Box
            onMouseEnter={() => hoverHandler("enter")}
            onMouseLeave={() => hoverHandler("leave")}
            onClick={() =>
                navigate(`/projects/${encodeURIComponent(entry.id)}`)
            }
            style={{ cursor: "pointer", 
             
        }}
            sx={{
                transform: `scale(${scale}) translateY(-0.5rem)`,
                transition: "0.15s all ease",
            }}
        >
            <Paper elevation={elevation} sx={{ p: 2 }}>
                <Box>{children}</Box>
            </Paper>
        </Box>
    );
};

export default CustomTimelineContentWrapper;
