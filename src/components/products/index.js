import { useTheme } from "@mui/material/styles";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const renderProducts = products.map((product) => (
        <Grid
            item
            key={product.id}
            xs={2}
            sm={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
        >
            {matches ? (
                <SingleProduct product={product} matches={matches} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )}
        </Grid>
    ));

    return (
        <Stack>
            <Grid
                container
                spacing={{ xs: 2, md: 1 }}
                justifyContent={"justify"}
                sx={{ margin: "20px 4px 10px 4px", paddingRight: "15px" }}
                columns={{ xs: 4, sm: 8, md: 20 }}
            >
                {renderProducts}
            </Grid>
        </Stack>
    );
}
