import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavouriteIcon from "@mui/icons-material/Favorite";
import {
    ActionIconsContainerDesktop,
    ActionIconsContainerMobile,
    MyList,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
    const Component = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;

    return (
        <Component sx={{ backgroundColor: "#c2c2c2", zIndex: "1500" }}>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            justifyContent: "center",
                            display: "flex",
                            color: matches && Colors.primary,
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            justifyContent: "center",
                            display: "flex",
                            color: matches && Colors.primary,
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            justifyContent: "center",
                            display: "flex",
                            color: matches && Colors.primary,
                        }}
                    >
                        <FavouriteIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    );
}
