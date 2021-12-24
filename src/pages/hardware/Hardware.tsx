import { Box } from "@mui/material";
import { useRef } from "react";
import Profile from "../../components/Profile";
import Description from "./Description";

const Hardware = () => {
    const projectRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <Profile projectRef={projectRef}/>
            <Description />
            <Box ref={projectRef} id="projects">
                
            </Box>
        </>
    );
};

export default Hardware;
