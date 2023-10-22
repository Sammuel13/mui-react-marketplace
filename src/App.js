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
