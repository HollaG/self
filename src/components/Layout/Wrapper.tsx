import { Box, Container } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState, useEffect } from "react";
import useDisplayMode from "../../hooks/useDisplayMode";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { PROFILE_HEIGHT_PX } from "../constants";

const Wrapper: React.FC<{
    upper: React.ReactNode;
    nav: React.ReactNode;
    content: React.ReactNode;
}> = ({ upper, nav, content }) => {
    const [brightness, setBrightness] = useState(1);

    const { height } = useWindowDimensions();

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

    const [boxShadowOn, setBoxShadowOn] = useState(false);

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
                <Box
                    sx={{
                        // backgroundColor: theme.palette.primary.main,
                        textAlign: "center",
                        // background: 'rgb(21,101,192)',
                        background:
                            // "linear-gradient(180deg, rgba(21,101,192,1) 0%, rgba(25,118,210,1) 50%, rgba(66,165,245,1) 100%)",
                            "linear-gradient(180deg, rgba(21,101,192,1) 0%, rgba(58,126,202,1) 55%, rgba(167,199,233,1) 100%);",
                        // height: "100%",
                        height: "80vh",
                        minHeight: `${PROFILE_HEIGHT_PX}px`,
                    }}
                >
                    {upper}
                </Box>
            </Box>
            <Box
                sx={{
                    mt: offset,
                }}
            >
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
                >
                    {nav}
                </Box>

                <Box
                    sx={{
                        background:
                            "linear-gradient(180deg, rgba(214,230,246,1) 0%, rgba(230,241,251,1) 3%, rgba(246,251,255,1) 16%, rgba(246,251,255,1) 100%);",
                        pt: 2,
                    }}
                >
                    {content}
                </Box>
            </Box>
        </Box>
    );
};

export default Wrapper;
