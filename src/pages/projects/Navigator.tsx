import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { MutableRefObject, RefObject } from "react";
import { TimelineItemStruct } from "../../types/types";

const Navigator: React.FC<{
    entry: TimelineItemStruct;
    sections: string[];
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}> = ({ entry, sections, sectionRefs }) => {
    console.log(sectionRefs);
    return (
        <Box>
            {sections?.map((section, index) => (
                <Button
                    key={index}
                    onClick={() =>
                        sectionRefs.current[index]?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    color="inherit"
                >
                    <Box>
                        <Typography>{section}</Typography>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </Box>
                </Button>
            ))}
        </Box>
    );
};

export default Navigator;
