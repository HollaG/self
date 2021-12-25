import { Box, Container } from "@mui/material";
import React from "react";
import "./App.css";
import Body from "./components/Body";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
function App() {
    return (
        <BrowserRouter>
            {/* <Container maxWidth="lg" sx={{ my: 2 }}> */}
            <ScrollToTop>
                <Body />
            </ScrollToTop>
            {/* </Container> */}
        </BrowserRouter>
    );
}

export default App;
