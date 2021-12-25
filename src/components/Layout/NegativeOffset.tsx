import { Box } from "@mui/material";
import { MutableRefObject } from "react";
import { TimelineItemStruct } from "../../types/types";
import { NAVIGATOR_HEIGHT_PX } from "../constants";
{
    /* This element to account for the fact we have an overhanging nav bar and allows us to offset it by the 'top' property. See: https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far */
}

const NegativeOffset: React.FC<{
    index: number;
    refArray: MutableRefObject<(HTMLElement | null)[]>;
}> = ({ index, refArray, children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Box
                ref={(el: HTMLElement) => {
                    refArray.current[index] = el;
                    return el;
                }}
                sx={{
                    position: "absolute",
                    top: `-${NAVIGATOR_HEIGHT_PX + 15}px`, // 16 is the padding size of the container minus 1 because of top: -1 fix that we applied
                    left: 0,
                }}
            />
            {children}
        </Box>
    );
};

export default NegativeOffset;
