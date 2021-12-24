import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import useDisplayMode from "../hooks/useDisplayMode";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { PROFILE_HEIGHT_PX } from "./constants";

const Navigator = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [boxShadowOn, setBoxShadowOn] = useState(false);
    const { height } = useWindowDimensions();

    const displayMode = useDisplayMode();
    console.log(displayMode);
    useScrollPosition(({ prevPos, currPos }) => {
        if (displayMode === "normal") {
            // "Normal" mode - only activate the box shadow once the navbar is at the top of the screen (offset of 650px, the height of the profile area)
            let heightOfProfileForBothDesktopAndMobile = 650; // Mobile is always set to 'normal' mode. The profile height might be more than 650px on mobile, so even though it's on normal mode we need to check for it
            if (0.8 * height > PROFILE_HEIGHT_PX) {
                heightOfProfileForBothDesktopAndMobile = 0.8 * height;
            }

            if (currPos.y > -heightOfProfileForBothDesktopAndMobile) {
                setBoxShadowOn(false);
            } else {
                setBoxShadowOn(true);
            }
        } else {
            if (Math.round(currPos.y) < 0) {
                // true when the user hasn't scrolled down (because of the position: fixed element which is 80vh tall)
                setBoxShadowOn(true);
            } else {
                setBoxShadowOn(false);
            }
        }
    });
    return (
        <Box
            sx={{
                // mb: 6,
                textAlign: "center",
                // pt: 3,
                height: "80px",
                background:
                    "linear-gradient(180deg, rgba(167,199,233,1) 0%, rgba(214,230,246,1) 100%);",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                top: -1, // This offset (instead of top: 0) is to fix a bug where on mobile, there will be a gap btwn the navbar and the top of the screen.
                // This only occurs on mobile, desktop is unaffected
                zIndex: 10,
                boxShadow: boxShadowOn ? 3 : 0,
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
                    <Typography color="grey-100">PROJECTS</Typography>
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
                    <Typography color="grey-100">SKILLS</Typography>
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
                    <Typography color="grey-100">EDUCATION</Typography>
                    <FontAwesomeIcon icon={faCaretDown} />
                </Box>
            </Button>
        </Box>
    );
};

export default Navigator;
