import { Box } from "@mui/material";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import SimpleShopping from "../img/software/simpleshopping.jpg";

const CustomTimelineImage: FC<{ src: string }> = ({ src }) => {
    return (
        <Box
            sx={{ position: "relative", cursor: "pointer" }}
            // onClick={() => window.open(src, "_blank")}
        >
            <LazyLoadImage
                src={src}
                style={{
                    width: "100%",
                    maxHeight: "700px",
                    objectFit: "contain",
                   
                    borderRadius: "10px",
                    
                }}

             
            />
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
