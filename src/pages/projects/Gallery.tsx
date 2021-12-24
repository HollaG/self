import { Container } from "@mui/material";
import { useState, ReactElement, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import { projects } from "../../projects";
import { TimelineItemStruct } from "../../types/types";

const Gallery: React.FC<{
    entry: TimelineItemStruct | null;
}> = ({ entry }) => {
    const [images, setImages] = useState<ReactElement[]>([]);
    useEffect(() => {
        if (entry) {
            const numImages = entry.totalImages;
            const foundImages = [];
            for (let i = 1; i <= numImages; i++) {
                foundImages.push(
                    <LazyLoadImage
                        key={i}
                        src={`/img/${entry.type}/${entry.id}/${i}.png`}
                        alt={entry.title}
                    />
                );
            }
            setImages(foundImages);
        }

        //  else setProject("none");
    }, [entry]);

    
    return (
        <Container maxWidth="md">
            <Carousel showThumbs={false}>{images}</Carousel>
        </Container>
    );
};

export default Gallery;
