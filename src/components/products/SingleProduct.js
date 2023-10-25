import { Stack } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    // ProductAddToCart,
    ProductFavButton,
    ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import FitScreenIcon from "@mui/icons-material/FitScreen";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from '@mui/icons-material/Edit';

export default function SingleProduct({ product, matches }) {
    return (
        <>
            <Product>
                <ProductImage src={product.image} alt={product.name} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <EditIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            {/* <ProductAddToCart variant="contained">
                Adicionar ao carrinho
            </ProductAddToCart> */}
        </>
    );
}
