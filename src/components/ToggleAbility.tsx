import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleAbility = () => {
    const [ability, setAbility] = useState("");
    const navigate = useNavigate()
    const handleAbility = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        newAbility: string
    ) => {
        if (newAbility !== null) {
            setAbility(newAbility);
            
            navigate(`/${newAbility}`);
        }
    };

    return (
        <Box sx={{display: 'flex', justifyContent: "center"}}>
            <ToggleButtonGroup
                value={ability}
                exclusive
                onChange={handleAbility}
                aria-label="Choose an ability of mine to view"
                size="small"
            >
                <ToggleButton
                    value=""
                    aria-label="software engineering"
                >
                    Software
                </ToggleButton>
                <ToggleButton
                    value="hardware"
                    aria-label="hardware engineering"
                >
                    Hardware
                </ToggleButton>
                <ToggleButton value="photography" aria-label="photography">
                    Photography
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default ToggleAbility;
