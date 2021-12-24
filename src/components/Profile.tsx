import { Box, Button, Container, Typography } from "@mui/material";
import profileIcon from "../img/profile.jpg";
import ToggleAbility from "./ToggleAbility";
import { useLocation } from "react-router-dom";
import { theme } from "../theme";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { PROFILE_HEIGHT_PX } from "./constants";
const Profile: React.FC<{ projectRef: React.RefObject<HTMLDivElement> }> = ({
    projectRef,
}) => {
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
        <Box sx={{ height: "80vh", minHeight: `${PROFILE_HEIGHT_PX}px` }}>
            <Box
                sx={{
                    // backgroundColor: theme.palette.primary.main,
                    textAlign: "center",
                    // background: 'rgb(21,101,192)',
                    background:
                        // "linear-gradient(180deg, rgba(21,101,192,1) 0%, rgba(25,118,210,1) 50%, rgba(66,165,245,1) 100%)",
                        "linear-gradient(180deg, rgba(21,101,192,1) 0%, rgba(58,126,202,1) 65%, rgba(167,199,233,1) 100%);",
                    height: "100%",
                }}
            >
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
                            style={{ width: "100%", height: "100%" }}
                            src={profileIcon}
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
                        I love creating products to solve problems! Scroll down
                        to see some of them.
                    </Typography>
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Button variant="contained" color="success">
                            Contact me
                        </Button>
                    </Box>
                </Container>
            </Box>
            {/* <Box
                sx={{
                    height: "35%",
                    background:
                        "linear-gradient(180deg, rgba(66,165,245,1) 0%, rgba(246,251,255,1) 100%);",
                    pb: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "black",
                    position: "sticky",
                    top: 0,
                }}
            >
                <Box
                    sx={{
                        mb: 6,
                        textAlign: "center",
                        pt: 3
                    }}
                    ref={navRef}
                >
                    <Button
                        color="inherit"
                        onClick={() =>
                            navRef &&
                            navRef.current &&
                            navRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        <Box>
                            <Typography color="grey-100">
                                PROJECTS
                            </Typography>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </Box>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() =>
                            navRef &&
                            navRef.current &&
                            navRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        <Box>
                            <Typography color="grey-100">
                                SKILLS
                            </Typography>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </Box>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() =>
                            navRef &&
                            navRef.current &&
                            navRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        <Box>
                            <Typography color="grey-100">
                                EDUCATION
                            </Typography>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </Box>
                    </Button>
                </Box>
            </Box> */}
        </Box>
    );
};

export default Profile;
