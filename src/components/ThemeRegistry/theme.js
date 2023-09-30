import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    preload: true,
    variable: "--font-jet-brains-mono",
    display: "swap",
});

const theme = createTheme({
    palette: {},
    typography: {
        fontFamily: jetBrainsMono.style.fontFamily,
    },
});

theme.typography.button = {
    fontFamily: jetBrainsMono.style.fontFamily,
    textTransform: "uppercase",
    fontWeight: 700,   
};

export default theme;
