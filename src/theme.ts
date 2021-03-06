import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        profileHeader: {
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "white",
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        profileContent: {
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "white",
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        projectHeader: {
            fontSize: "2rem",
            fontWeight: 800,
            color: "white",
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        projectContentHeader: {
            fontSize: "2rem",
            fontWeight: 800,

            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        tooltip: {
            fontFamily: "Montserrat,sans-serif;",
            fontWeight: 700,
            fontSize: "1.0rem",
            lineHeight: 1.6,
            color: "#444444",
        },
    },
});

declare module "@mui/material/styles" {
    interface TypographyVariants {
        profileHeader: React.CSSProperties;
        profileContent: React.CSSProperties;
        projectHeader: React.CSSProperties;
        projectContentHeader: React.CSSProperties;
        tooltip: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        profileHeader?: React.CSSProperties;
        profileContent?: React.CSSProperties;
        projectHeader?: React.CSSProperties;
        projectContentHeader?: React.CSSProperties;
        tooltip?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        profileHeader: true;
        profileContent: true;
        projectHeader: true;
        projectContentHeader: true;
        tooltip: true;
    }
}
