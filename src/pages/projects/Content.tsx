import { Box, Container, Divider, Typography } from "@mui/material";
import { MutableRefObject, ReactElement, RefObject } from "react";
import { NAVIGATOR_HEIGHT_PX } from "../../components/constants";
import LanguageBadge from "../../components/LanguageBadge";
import NegativeOffset from "../../components/Layout/NegativeOffset";
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
                    <NegativeOffset key={index} index={index} refArray={sectionRefs}>
                        
                        <ContentBlock
                            content={entry[section]}
                            type={capitalizeFirstLetter(section)}
                        />
                    </NegativeOffset>
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
