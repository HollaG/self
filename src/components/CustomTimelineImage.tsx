import { Box } from "@mui/material";
import { FC } from "react";
import LazyLoad from "react-lazyload";
const CustomTimelineImage: FC<{
    alt: string;
    src: string;
    placeholderSrc?: string;
}> = ({ alt, src, placeholderSrc }) => {
    return (
        <Box
            sx={{ position: "relative", cursor: "pointer" }}
            // onClick={() => window.open(src, "_blank")}
        >
            <LazyLoad height={400} offset={400}>
                <img
                    src={src}
                    style={{
                        width: "100%",
                        maxHeight: "700px",
                        objectFit: "contain",

                        borderRadius: "10px",
                      
                    }}
                    alt={alt}
                />
            </LazyLoad>

            {/* <img
                style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "700px",
                    objectFit: "contain",
                    transform: "scale(0.95)",
                    borderRadius: "10px",
                }}
                src={src}
                alt="date"
            />
            <img
                className="blur"
                style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "700px",
                    position: "absolute",
                    objectFit: "cover",
                    left: 0,
                    filter: "blur(5px)",
                    zIndex: -1,
                }}
                src={src}
                alt=""
            /> */}
        </Box>
    );
};

export default CustomTimelineImage;
