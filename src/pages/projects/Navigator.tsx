import { Box, Button, Typography } from "@mui/material";
import { TimelineItemStruct } from "../../types/types";

const Navigator: React.FC<{ entry: TimelineItemStruct|null }> = ({ entry }) => {
    return (
        <Box>
            <Button
                color="inherit"
                // onClick={() =>
                //     navRef &&
                //     navRef.current &&
                //     navRef.current.scrollIntoView({
                //         behavior: "smooth",
                //     })
                // }
            >
                <Box>
                    <Typography>OVERVIEW</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
            <Button
                color="inherit"
                // onClick={() =>
                //     navRef &&
                //     navRef.current &&
                //     navRef.current.scrollIntoView({
                //         behavior: "smooth",
                //     })
                // }
            >
                <Box>
                    <Typography>GOALS</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
            <Button
                color="inherit"
                // onClick={() =>
                //     navRef &&
                //     navRef.current &&
                //     navRef.current.scrollIntoView({
                //         behavior: "smooth",
                //     })
                // }
            >
                <Box>
                    <Typography>TESTIMONIALS</Typography>
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                </Box>
            </Button>
        </Box>
    );
};

export default Navigator;
