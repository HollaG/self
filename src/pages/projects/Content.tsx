import { Box, Container, Divider, Typography } from "@mui/material";
import { MutableRefObject, ReactElement, RefObject } from "react";
import { NAVIGATOR_HEIGHT_PX } from "../../components/constants";
import LanguageBadge from "../../components/LanguageBadge";
import {
    SectionType as SectionType,
    TimelineItemStruct,
} from "../../types/types";
import { capitalizeFirstLetter } from "../../util/utils";

const ContentBlock: React.FC<{ content: ReactElement[]; type: string }> = ({
    content,
    type,
}) => {
    return (
        <Box sx={{ mx: 2, mb: 4, textAlign: "left" }}>
            <Typography variant="projectContentHeader">{type}</Typography>
            <Divider
                sx={{ maxWidth: "400px", my: 2, borderBottomWidth: "thick" }}
            />
            {content}
        </Box>
    );
};

const Content: React.FC<{
    entry: TimelineItemStruct;
    sections: string[];
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}> = ({ entry, sections, sectionRefs }) => {
    if (!entry) return <></>;
    return (
        <Container
            maxWidth="md"
            // sx={{
            //     position: "absolute",
            //     top: `-${NAVIGATOR_HEIGHT_PX}px`,
            //
            // }}
        >
            {sections.map((section, index) => {
                return (
                    <Box key={index} sx={{ position: "relative" }}>
                        {/* This element to account for the fact we have an overhanging nav bar and allows us to offset it by the 'top' property. See: https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far */}
                        <Box
                            ref={(el: HTMLElement) => {
                                sectionRefs.current[index] = el;
                                return el;
                            }}
                            sx={{
                                position: "absolute",
                                top: `-${NAVIGATOR_HEIGHT_PX}px`,
                                left: 0,
                            }}
                        />
                        <ContentBlock
                            content={entry[section]}
                            type={capitalizeFirstLetter(section)}
                        />
                    </Box>
                );
            })}

            {/* {entry.overview && (
                <ContentBlock content={entry.overview} type="Overview" />
            )}
            {entry?.goals && (
                <ContentBlock content={entry.goals} type="Goals" />
            )}
            {entry?.testimonials && (
                <ContentBlock
                    content={entry.testimonials}
                    type="Testimonials"
                />
            )}
            {entry?.technical && (
                <ContentBlock content={entry.technical} type="Technical" />
            )} */}
        </Container>
    );
};

export default Content;
