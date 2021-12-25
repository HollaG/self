import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import useDisplayMode from "../hooks/useDisplayMode";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { PROFILE_HEIGHT_PX } from "../components/constants";

const Navigator: React.FC<{
    softwareRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}> = ({ softwareRefs }) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [boxShadowOn, setBoxShadowOn] = useState(false);
    const { height } = useWindowDimensions();

    const displayMode = useDisplayMode();

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
        <Box>
            <Button
                color="inherit"
                onClick={() =>
                    softwareRefs.current[0]?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                <Box>
                    <Typography>SKILLS</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
            <Button
                color="inherit"
                onClick={() =>
                    softwareRefs.current[1]?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                <Box>
                    <Typography color="grey-100">PROJECTS</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
            <Button
                color="inherit"
                onClick={() =>
                    softwareRefs.current[2]?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                <Box>
                    <Typography>EXPERIENCE</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
        </Box>
    );
};

export default Navigator;
