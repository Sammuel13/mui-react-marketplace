import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import { FitScreen, Height } from "@mui/icons-material";
import CadastrarCarta from "./components/criarCarta";

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
                    <Stack>
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
