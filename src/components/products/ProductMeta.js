import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";

export default function ProductMeta({ product, matches }) {
    return (
        <ProductMetaWrapper>
            <Typography variant={matches ? "h6" : "h5"} lineHeight={2} color="#000000">
                {product.name}
            </Typography>
            <Typography variant={matches ? "caption" : "body1"}>
                R$ {product.price}
            </Typography>
        </ProductMetaWrapper>
    );
}
