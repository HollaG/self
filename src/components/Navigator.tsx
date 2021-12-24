import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navigator = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [boxShadowOn, setBoxShadowOn] = useState(false);
    const { height } = useWindowDimensions();

    useScrollPosition(({ prevPos, currPos }) => {
        // console.log(currPos.y, height);

        if (0.8 * height < 650 && currPos.y > -650) {
            setBoxShadowOn(false);
        } else if (Math.round(currPos.y) < 0) {
            // true when the user hasn't scrolled down (because of the position: fixed element which is 80vh tall)
            setBoxShadowOn(true);
        } else {
            setBoxShadowOn(false);
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
                    "linear-gradient(180deg, rgba(167,199,233,1) 0%, rgba(230,241,251,1) 100%);",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                top: 0, // This offset is to fix a bug where on mobile, there will be a gap btwn the navbar and the top of the screen.
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
