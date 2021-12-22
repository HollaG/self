
import Profile from "./Profile";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Software from "../pages/software/Software";
import Hardware from "../pages/hardware/Hardware";
import Project from "../pages/projects/Project";
const Body = () => {
    return <>
        
        <Routes>
            <Route path="/" element={<Software/>}/>
            <Route path="/software" element={<Software/>}/>
            <Route path="/hardware" element={<Hardware/>}/>
            <Route path="/photography" element={<Typography> photography</Typography>}/>
            <Route path="/projects/:project" element={<Project/>}/>
        </Routes>
        
    </>
}

export default Body;