import { Box, Container } from "@mui/material";
import { useRef, useState } from "react";
import Profile from "../../components/Profile";
import Description from "./Description";
import TimelineWrapper from "./TimelineWrapper";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Navigator from "../../components/Navigator";

const Software = () => {
    const projectRef = useRef<HTMLDivElement>(null);
    const [brightness, setBrightness] = useState(1);

    // useScrollPosition(({ prevPos, currPos }) => {
    //     // Brightness range: 1 (0 scroll) to 0.6 (max scroll)
    //     const adjustedHeight = 0.8 * height < 650 ? 650 : height;
    //     setBrightness((currPos.y / (adjustedHeight * 0.8)) * 0.4 + 0.6);
    //     let brightLvl = (currPos.y / (adjustedHeight * 0.8)) * 0.4 + 0.6;
    //     if (brightLvl > 1) brightLvl = 1
    //     console.log(brightLvl);
    //     setBrightness((prevBright) => {
    //         if (prevBright === brightLvl) return prevBright;
    //         else return brightLvl;
    //     });
    // });
  
    const { height } = useWindowDimensions();
    // const [offset, setOffset] = useState('80vh')
    let offset = "80vh";
    let position:"fixed"|"static" = "fixed"
    if (0.8 * height < 650) {
        // DON'T use the fancy over-scroll trick because if the window height is less than the div height, the content gets pushed off-screen and can't be scrolled into view because of position: fixed
        offset = "0";
        position = "static"
    } else {
        offset = "80vh";
        position = 'fixed'
    }

    return (
        <Box>
            <Box
                sx={{
                    position: position,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                    filter: `brightness(${brightness})`,
                }}
            >
                <Profile projectRef={projectRef} />
            </Box>
            {/* <Description /> */}

            <Box
                sx={{
                    mt: offset,
                }}
            >
                <Navigator />

                <Box
                    sx={{
                        background:
                            "linear-gradient(180deg, rgba(230,241,251,1) 0%, rgba(246,251,255,1) 10%, rgba(246,251,255,1) 100%);",
                        pt: 2,
                    }}
                >
                    <Container
                        maxWidth="xl"
                        ref={projectRef}
                        id="projects"
                        sx={
                            {
                                // mt: -4,
                            }
                        }
                    >
                        <TimelineWrapper />
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default Software;
