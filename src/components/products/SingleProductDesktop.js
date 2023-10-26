import { Stack, Snackbar, IconButton } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductFavButton,
    ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

export default function SingleProductDesktop({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false);
    const [isFav, setIsFav] = useState(false);  // Estado para rastrear o favorito
    const [openToast, setOpenToast] = useState(false);  // Estado para controlar a visibilidade do toast

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const handleFavClick = () => {
        setIsFav(!isFav);
        if (!isFav) {
            setOpenToast(true);  // Mostrar o toast se o produto for favoritado
        }
    };

    const handleCloseToast = () => {
        setOpenToast(false);
    };

    return (
        <>
            <Product
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ProductImage src={product.image} alt={product.name} />
                <ProductFavButton isFav={isFav} onClick={handleFavClick}>
                    <FavoriteIcon />
                </ProductFavButton>
                {showOptions
                    // && <ProductAddToCart show={showOptions} variant="contained">
                    //     Add to cart
                    // </ProductAddToCart>
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <EditIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <ProductMeta product={product} matches={matches} />
            </Product>

            {/* Notificação (toaster) */}
            <Snackbar
                open={openToast}
                autoHideDuration={3000} // 3 segundos
                onClose={handleCloseToast}
                message="Item favoritado"
                action={
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={handleCloseToast}
                    >
                        X
                    </IconButton>
                }
            />
        </>
    );
}
