import { Box, Typography } from "@mui/material";

const Description = () => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography sx={{mt: 1 }}>
                I'm a self-taught software developer with a passion for helping
                other people.
            </Typography>
            <Typography >
                That's why most of my projects aim to make lives easier for others,
                in their own small way.
            </Typography>
        </Box>
    );
};

export default Description;
