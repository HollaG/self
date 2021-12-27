import { Box, Button, Container, Typography } from "@mui/material";
// import profileIcon from "../img/profile.webp";
import ToggleAbility from "../components/ToggleAbility";
import { useLocation } from "react-router-dom";
import { theme } from "../theme";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { PROFILE_HEIGHT_PX } from "../components/constants";
const Profile: React.FC = ({}) => {
    let location = useLocation();
    let text = "Full Stack Web Developer";

    switch (location.pathname) {
        case "/":
            text = "Full Stack Web Developer";
            break;
        case "/hardware":
            text = "Amateur DIY-er";
            break;
        case "/photography":
            text = "Hobbyist Wildlife Photographer";
            break;
    }

    const navRef = useRef<HTMLDivElement>(null);
    return (
        
            <Container
                sx={{
                    height: "100%",
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                maxWidth="sm"
            >
                <Typography variant="profileHeader" display="block">
                    Hi, I'm Marcus.
                </Typography>
                <br />
                <Box
                    sx={{
                        borderRadius: "50%",
                        mx: "auto",
                        maxWidth: "200px",
                        maxHeight: "200px",
                        overflow: "hidden",
                        boxShadow: 5,
                    }}
                >
                    <img
                        style={{ width: "200px", height: "200px" }}
                        src={"/img/profile.webp"}
                        alt=""
                    />
                </Box>
                <Typography
                    variant="profileContent"
                    sx={{ mt: 4 }}
                    display="block"
                >
                    I'm a self-taught full-stack dev from Singapore.
                </Typography>

                <Typography
                    variant="profileContent"
                    sx={{ mt: 4 }}
                    display="block"
                >
                    I love creating products to solve problems! Scroll down to
                    see my work.
                </Typography>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Button variant="contained" color="success">
                        Contact me
                    </Button>
                </Box>
            </Container>
        
    );
};

export default Profile;
