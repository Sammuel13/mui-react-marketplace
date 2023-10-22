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
        <Component>
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
                            color: matches && Colors.secondary,
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
                            color: matches && Colors.secondary,
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
                            color: matches && Colors.secondary,
                        }}
                    >
                        <FavouriteIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    );
}
