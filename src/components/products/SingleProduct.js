import { useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify'; // Importe o toast
import 'react-toastify/dist/ReactToastify.css'; // Importe os estilos, se estiver usando o react-toastify

import { Stack } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductFavButton,
    ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from '@mui/icons-material/Edit';
import { Snackbar, IconButton } from '@mui/material';

export default function SingleProduct({ product, matches }) {
    const [isFav, setIsFav] = useState(false);
    const [openToast, setOpenToast] = useState(false);

    const handleFavClick = () => {
        setIsFav(!isFav);

        // Se o item não era favorito e agora está sendo favoritado, mostre o toast
        if (!isFav) {
            setOpenToast(true);
        }
    };

    const handleCloseToast = () => {
        setOpenToast(false);
    };

    return (
        <>
            <Product>
                <ProductImage src={product.image} alt={product.name} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={isFav}>
                            <FavoriteIcon onClick={handleFavClick} />
                        </ProductFavButton>
                        {/* ... outros ícones/buttons */}
                    </Stack>
                </ProductActionsWrapper>
            </Product>

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