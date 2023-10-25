import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";

function App() {
    useEffect(() => {
        document.title = "Marketplace";
    }, []);

    const styles = {
        container: {
            display: "grid",
            gridTemplateRows: "auto 1fr auto", // Cria três linhas: cabeçalho, conteúdo e rodapé
            minHeight: "100vh",
        },
        content: {
            padding: "20px",
        },

        footer: {
            display: "flex",
            justifyContent: "center", // Alinha horizontalmente ao centro
            alignItems: "center", // Alinha verticalmente ao centro
            padding: "10px",
            backgroundColor: "lightgray",
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Stack maxWidth="xl">
                <UIProvider>
                    <Appbar />
                    <AppDrawer />
                    <Stack>
                        <Typography variant="h1">Hello World</Typography>
                        <Typography variant="h1">Hello World</Typography>
                        <Typography variant="h1">Hello World</Typography>
                    </Stack>
                    <Footer />
                    {/*
                    searchbox
                    */}
                </UIProvider>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
