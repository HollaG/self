import { Box, Container } from "@mui/material";
import React from "react";
import "./App.css";
import Body from "./components/Body";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <Router>
            {/* <Container maxWidth="lg" sx={{ my: 2 }}> */}
                <Body />
            {/* </Container> */}
        </Router>
    );
}

export default App;
