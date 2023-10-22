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
// import { Colors } from "../../styles/theme";
// import { lighten } from "@mui/material/styles";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
    const { isDrawerOpen, setIsDrawerOpen } = useUIContext();

    return (
        <>
            {isDrawerOpen && (
                <DrawerCloseButton onClick={() => setIsDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5rem",
                            // color: lighten(0.09, Colors.secondary),
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={isDrawerOpen}>
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
