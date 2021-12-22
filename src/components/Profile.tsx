import { Box, Container, Typography } from "@mui/material";
import profileIcon from "../img/profile.jpg";
import ToggleAbility from "./ToggleAbility";
import { useLocation } from "react-router-dom";
const Profile = () => {
    let location = useLocation();
    let text = "Full Stack Web Developer"
    
    switch (location.pathname) {
        case "/":
            text = "Full Stack Web Developer"
            break;
        case "/hardware":
            text = "Amateur DIY-er"
            break;
        case "/photography":
            text = "Hobbyist Wildlife Photographer"
            break;
    }
    return (
        <Box>
            <Box
                sx={{
                    borderRadius: "50%",
                    mx: "auto",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    overflow: "hidden",
                }}
            >
                <img
                    style={{ width: "100%", height: "100%" }}
                    src={profileIcon}
                    alt=""
                />
            </Box>
            <Box sx={{ textAlign: "center", mt: 2, py: 1, px: 2 }}>
                <Typography variant="h4"> Marcus Soh</Typography>
                <Typography variant="subtitle1"> {text}</Typography>
            </Box>
            <ToggleAbility />
        </Box>
    );
};

export default Profile;
