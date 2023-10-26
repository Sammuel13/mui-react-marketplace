// import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
// import SearchIcon from "@mui/icons-material/Search";
// import Actions from "./actions";

// export default function AppbarDesktop({ matches }) {
//     return (
//         <AppbarContainer>
//             <AppbarHeader>Marketplace</AppbarHeader>
//             <MyList type="row">
//                 <ListItemText primary="Home" />
//                 <ListItemText primary="Categories" />
//                 <ListItemText primary="Products" />
//                 <ListItemText primary="Contact Us" />
//                 <ListItemButton>
//                     <ListItemIcon>
//                         <SearchIcon />
//                     </ListItemIcon>
//                 </ListItemButton>
//             </MyList>
//             <Actions matches={matches} />
//         </AppbarContainer>
//     );
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Login from "../login";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../img/logo.png';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
    Dialog,
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
    FormControlLabel,
    Checkbox,
} from "@mui/material";

// import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    marginRight: theme.spacing(2),
    //marginLeft: 0,
    minWidth: "60%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#000",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "100%",
        },
    },
}));

export default function AppbarDesktop() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Dialog open={isOpen} onClose={handleMenuClose}>
            <Paper
                style={{
                    position: "fixed",
                    top: "60px",
                    right: "20px",
                    padding: "20px",
                    height: "400px",
                    width: "280px",
                    margin: "auto auto",
                }}
            >
                <Grid container direction="column" alignItems="center">
                    <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h5">
                        Login
                    </Typography>
                </Grid>
                <TextField
                    label="Nome de Usuário"
                    placeholder="Digite seu nome de usuário"
                    fullWidth
                    required
                    style={{ marginBottom: "1rem" }}
                />
                <TextField
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    fullWidth
                    required
                />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Lembrar-me"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{ margin: "8px 0" }}
                    fullWidth
                >
                    Entrar
                </Button>
                <Typography>
                    <Link href="#">Esqueceu Senha?</Link>
                </Typography>
                <Typography>
                    {" "}
                    Não possui uma conta? <Link href="#">Criar conta</Link>
                </Typography>
            </Paper>
        </Dialog>
        // <Menu
        //     anchorEl={anchorEl}
        //     anchorOrigin={{
        //         vertical: "bottom",
        //         horizontal: "right",
        //     }}
        //     id={menuId}
        //     keepMounted
        //     transformOrigin={{
        //         vertical: "top",
        //         horizontal: "right",
        //     }}
        //     open={isMenuOpen}
        //     onClose={handleMenuClose}
        // >
        //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        // </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <AddShoppingCartIcon />
                    </Badge>

                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    const { setIsDrawerOpen } = useUIContext();

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#FFCB05" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="open drawer"
                            sx={{ mr: 2, color: "#3D7DCA" }}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />

                        </IconButton>
                        {/* Aqui está a logo */}
                        <img src={logo} alt="PokeMarketplace Logo" style={{ width: 150, marginBottom: '0px' }} />

                        <Typography
                            variant="h8"
                            component="div"
                            sx={{
                                color: "#3D7DCA",  // Cor azul da logo do Pokémon.
                                textShadow: "2px 2px 4px #FFFFFFAF, -2px 2px 4px #FFFFFFAF, 2px -2px 4px #FFFFFFAF, -2px -2px 4px #FFFFFFAF",  // Sombra branca esfumaçada.
                                fontWeight: "bold",
                                display: { xs: "none", sm: "block" }
                            }}
                        >
                            Card Marketplace
                        </Typography>

                    </Box>

                    <Search >
                        <SearchIconWrapper sx={{background: "#ffffffAF",  zIndex: 100,}}>
                            <SearchIcon sx={{ color: "#2B609B" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            sx={{ width: "100%", color: "#2B609B", paddingLeft: "15px", backgroundColor: "#ffffffA8" }}
                        />
                    </Search>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            alignContent: "right",
                            gap: "10px",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            sx={{ color: "#2B609B" }}
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            sx={{ color: "#2B609B" }}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="cart"
                            sx={{ color: "#2B609B" }}
                        >
                            <Badge badgeContent={2} color="error">
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            sx={{ color: "#2B609B" }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
