// Return 'normal' or 'overlay' depending on conditions
// --------------------------------------------------
// Mobile device --> always return 'normal'
// Non-mobile and 0.8 * height < PROFILE_HEIGHT_PX --> return 'overlay' else return 'normal'

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { PROFILE_HEIGHT_PX } from "../components/constants";
import useWindowDimensions from "./useWindowDimensions";
const useDisplayMode = () => {
    const [displayMode, setDisplayMode] = useState<"normal"|"overlay">("normal");
    const { height } = useWindowDimensions();
    useEffect(() => {
        if (isMobile || 0.8 * height < PROFILE_HEIGHT_PX)
            return setDisplayMode("normal");
        else return setDisplayMode("overlay");
    }, [isMobile, setDisplayMode, height]);

    return displayMode;
};

export default useDisplayMode;
