
import Profile from "./Profile";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Software from "../pages/software/Software";
import Hardware from "../pages/hardware/Hardware";
const Body = () => {
    return <>
        <Profile/>
        <Routes>
            <Route path="/" element={<Software/>}/>
            <Route path="/hardware" element={<Hardware/>}/>
            <Route path="/photography" element={<Typography> photography</Typography>}/>
        </Routes>
        
    </>
}

export default Body;