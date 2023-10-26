import { useEffect } from "react";
import { Stack, Typography, Pagination, Breadcrumbs, Link } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
// import { FitScreen, Height } from "@mui/icons-material";
// import CadastrarCarta from "./components/criarCarta";
import Products from "./components/products";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function App() {
    useEffect(() => {
        document.title = "Marketplace";
    }, []);

    const styles = {
        container: {
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto', // Cria três linhas: cabeçalho, conteúdo e rodapé
            minHeight: '100vh',
        },
        content: {
            padding: '20px',
        },

        footer: {
            display: 'flex',
            justifyContent: 'center', // Alinha horizontalmente ao centro
            alignItems: 'center',     // Alinha verticalmente ao centro
            padding: '10px',
            backgroundColor: 'lightgray',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Stack sx={styles.container}>
                <UIProvider>
                    <Appbar />
                    <AppDrawer />
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ marginLeft: "15px" }}>
                        <Link color="#3D7DCA" href="#">
                            Home
                        </Link>
                        <Link color="#3D7DCA" href="#">
                            Cartas
                        </Link>
                        <Typography color="#000" >1ª Geração</Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h4"
                        sx={{
                            marginTop: { xs: 2, sm: 5 },
                            paddingLeft: { xs: 5, sm: 8 },
                            paddingBottom: { xs: 2, sm: 6 },
                            paddingTop: { xs: 2, sm: 0 },
                            fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' }  // Define o tamanho da fonte para h6 em dispositivos móveis e h4 em telas maiores.
                        }}
                    >
                        Pokémons da 1ª Geração
                    </Typography>

                    <Stack>
                        <Products />
                    </Stack>

                    <Stack>
                        {/* <Typography variant="h4" paddingLeft={10} paddingBottom={5} paddingTop={5}>Adicionar Carta à Venda</Typography>
                        <CadastrarCarta /> */}
                        <Pagination count={20} variant="outlined" color="secondary" showNextButton sx={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }} />
                    </Stack>
                    <Footer sx={styles.footer}></Footer>
                    {/*
                    searchbox
                    */}
                </UIProvider>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
