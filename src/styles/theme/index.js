import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#f44336",
    primaryLight: "#ff7961",
    primaryDark: "#ba000d",
    secondary: "#3f51b5",
    secondaryLight: "#757de8",
    secondaryDark: "#002984",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
    success: "#4caf50",
    danger: "#f44336",
    dark: "#212121",
    light: "#f5f5f5",
    muted: "#6c757d",
    border: "#dee2e6",
    inverse: "#2f3d4a",
    shaft: "#333",
    dim_gray: "#696969",
    dove_gray: "#666666",
    body_bg: "#c2c2c2",
    light_gray: "#d3d3d3",
    white: "#fff",
    blach: "#000",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
            light: Colors.primaryLight,
            dark: Colors.primaryDark,
        },
        secondary: {
            main: Colors.secondary,
            light: Colors.secondaryLight,
            dark: Colors.secondaryDark,
        },

        background: {
            default: Colors.body_bg,
        },
    },


    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: "250px",
                    padding: "1rem",
                    background: "#3D7DCA",
                    color: Colors.white,
                    // borderRadius: "0 1rem 1rem 0",
                    borderRight: `1px solid ${Colors.dim_gray}`,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "#FFCB05",
                },
            },
        },
    },
});

export default theme;
