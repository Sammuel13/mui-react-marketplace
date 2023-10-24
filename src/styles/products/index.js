import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
        position: "relative",
    },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "70%",
    // background: Colors.light_gray,
    // padding: "10px",
    [theme.breakpoints.down("md")]: {
        width: "80%",
        padding: "24px",
    },
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
    shouldFowardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
    color: isFav ? Colors.primary : Colors.light_gray,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: 0,
        right: 0,
    },
}));

export const ProductAddToCart = styled(Button, {
    shouldFowardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    width: "120px",
    fontSize: "12px",
    background: Colors.secondary,
    opacity: 0.9,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "2%",
        width: "300px",
        padding: "10px 5px",
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
    },
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box, {
    shouldFowardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: show ? "visible" : "none",
        position: "absolute",
        right: 0,
        top: "20%",
        animation:
            show &&
            `${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
    },
}));
