import { styled } from "@mui/system";
import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
// import { Colors } from "../../styles/theme";
// import { lighten } from "@mui/material/styles";

// import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';

const MiddleDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: Colors.white,  // Defina para qualquer cor que você desejar.
}));

// Usar assim:
// <MiddleDivider variant="middle" />


export default function AppDrawer() {
    const { isDrawerOpen, setIsDrawerOpen } = useUIContext();

    return (
        <>
            {isDrawerOpen && (
                <DrawerCloseButton onClick={() => setIsDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5 rem",
                            color: "#FFCB05",
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={isDrawerOpen} sx={{ padding: '0px', margin: '0px' }}>
                <List sx={{ padding: '0px', margin: '0px' }}>
                    <ListItemButton>
                        <ListItemText sx={{ fontSize: '8px' }}>Home</ListItemText>
                    </ListItemButton>
                    <MiddleDivider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Produtos</ListItemText>
                    </ListItemButton>
                    <MiddleDivider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Categoria</ListItemText>
                    </ListItemButton>
                    <MiddleDivider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Sobre Nós</ListItemText>
                    </ListItemButton>
                    <MiddleDivider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Contato</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
