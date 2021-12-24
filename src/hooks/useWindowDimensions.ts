import { useState, useEffect } from "react";

let prevDimensions = {
    width: 0,
    height: 0,
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    prevDimensions = getWindowDimensions();
    useEffect(() => {
        function handleResize() {
            const { width: newWidth, height: newHeight } =
                getWindowDimensions();
            
                // Prevent address bar causing unncessary updates. If the px change of the height or width is less than the threshold (50), we assume it's the address bar hiding. Don't update the state.
            // if (
            //     Math.abs(newWidth - prevDimensions.width) > 50 ||
            //     Math.abs(newHeight - prevDimensions.height) > 50
            // ) {
            //     prevDimensions = getWindowDimensions();
            //     console.log("height changed to ", newHeight)
            // }
            setWindowDimensions(prevDimensions);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [prevDimensions.width, prevDimensions.height]);

    return windowDimensions;
}
