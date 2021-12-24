import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Profile from "../Profile";
import Description from "./Description";
import TimelineWrapper from "./TimelineWrapper";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Navigator from "../Navigator";
import { PROFILE_HEIGHT_PX } from "../../components/constants";
import { isMobile } from "react-device-detect";
import useDisplayMode from "../../hooks/useDisplayMode";
import Wrapper from "../../components/Layout/Wrapper";

const Software = () => {
    const projectRef = useRef<HTMLDivElement>(null);
    const [brightness, setBrightness] = useState(1);

    const { height } = useWindowDimensions();
    // console.log('/rerender')

    const displayMode = useDisplayMode();
    useScrollPosition(({ prevPos, currPos }) => {
        if (displayMode === "normal") return setBrightness(1);
        // Brightness range: 1 (0 scroll) to 0.75 (max scroll)
        const adjustedHeight =
            0.8 * height < PROFILE_HEIGHT_PX ? PROFILE_HEIGHT_PX : height;

        let brightLvl = (currPos.y / (adjustedHeight * 0.8)) * 0.25 + 0.75;
        if (brightLvl > 1) brightLvl = 1;
        // console.log({brightLvl});
        setBrightness((prevBright) => {
            if (prevBright === brightLvl) return prevBright;
            else return brightLvl;
        });
    });

    const [offset, setOffset] = useState("80vh");
    const [position, setPosition] = useState<"fixed" | "static">("fixed");
    useEffect(() => {
        if (displayMode === "normal") {
            // DON'T use the fancy over-scroll trick because if the window height is less than the div height, the content gets pushed off-screen and can't be scrolled into view because of position: fixed
            setOffset("0");
            setPosition("static");
            setBrightness(1);
        } else {
            setOffset("80vh");
            setPosition("fixed");
        }
    }, [height, setOffset, setPosition, displayMode]);

    // let offset = "80vh";
    // let position:"fixed"|"static" = "fixed"
    // console.log({height})
    // if (0.8 * height < PROFILE_HEIGHT_PX) {
    //     // DON'T use the fancy over-scroll trick because if the window height is less than the div height, the content gets pushed off-screen and can't be scrolled into view because of position: fixed
    //     offset = "0";
    //     position = "static"
    // } else {
    //     offset = "80vh";
    //     position = 'fixed'
    // }

    const ProfileElement = <Profile />;
    const NavElement = <Navigator />;
    const TimelineElement = (
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
    );
    return (
        
        <Wrapper  upper={ProfileElement} nav={NavElement} content={TimelineElement} />
        // <Box>
        //     <Box
        //         sx={{
        //             position: position,
        //             top: 0,
        //             bottom: 0,
        //             left: 0,
        //             right: 0,
        //             zIndex: -1,
        //             filter: `brightness(${brightness})`,
        //         }}
        //     >
        //         <Profile projectRef={projectRef} />
        //     </Box>
        //     {/* <Description /> */}

        //     <Box
        //         sx={{
        //             mt: offset,
        //         }}
        //     >
        //         <Navigator />

        //         <Box
        //             sx={{
        //                 background:
        //                     "linear-gradient(180deg, rgba(214,230,246,1) 0%, rgba(230,241,251,1) 3%, rgba(246,251,255,1) 16%, rgba(246,251,255,1) 100%);",
        //                 pt: 2,
        //             }}
        //         >
        //             <Container
        //                 maxWidth="xl"
        //                 ref={projectRef}
        //                 id="projects"
        //                 sx={
        //                     {
        //                         // mt: -4,
        //                     }
        //                 }
        //             >
        //                 <TimelineWrapper />
        //             </Container>
        //         </Box>
        //     </Box>
        // </Box>
    );
};

export default Software;
