import { IconButton, Typography } from "@mui/material";
import { AppbarContainer } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import logo from '../../img/logo.png';
import Box from "@mui/material/Box";

export default function AppbarMobile({ matches }) {

    const { setIsDrawerOpen } = useUIContext();

    return (
        <AppbarContainer sx={{ display: "flex", justifyContent: "space-between", flexDirection: 'row', alignItems: 'center', marginBottom: '15px', backgroundColor: "#FFCB05" }}>
            {/* <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton> */}
            <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <MenuIcon />

                </IconButton>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Aqui está a logo */}
                <img src={logo} alt="PokeMarketplace Logo" style={{ width: 150, marginBottom: '0px' }} />

                <Typography
                    variant="h8"
                    component="div"
                    sx={{
                        color: "#3D7DCA",  // Cor amarela da logo do Pokémon.
                        textShadow: "2px 2px 4px #FFFFFFAF, -2px 2px 4px #FFFFFFAF, 2px -2px 4px #FFFFFFAF, -2px -2px 4px #FFFFFFAF",  // Sombra branca esfumaçada.
                        fontWeight: "bold",
                        display: { xs: "block", sm: "block" }
                    }}
                >
                    Card Marketplace
                </Typography>
            </Box>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}
