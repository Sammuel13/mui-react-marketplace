import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
// import { FitScreen, Height } from "@mui/icons-material";
import CadastrarCarta from "./components/criarCarta";
import Products from "./components/products";


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
                    <Typography
                        variant="h4"
                        sx={{
                            paddingLeft: { xs: 5, sm: 10} ,
                            paddingBottom: { xs: 2, sm: 10} ,
                            paddingTop: { xs: 2, sm: 0},
                            fontSize: { xs: 'h6.fontSize', sm: 'h4.fontSize' }  // Define o tamanho da fonte para h6 em dispositivos móveis e h4 em telas maiores.
                        }}
                    >
                        Meus Produtos à Venda
                    </Typography>

                    <Stack>
                        <Products />
                    </Stack>

                    <Stack sx={{ background: "#c2c2c21A" }}>
                        <Typography variant="h4" paddingLeft={10} paddingBottom={5} paddingTop={5}>Adicionar Carta à Venda</Typography>
                        <CadastrarCarta />
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
