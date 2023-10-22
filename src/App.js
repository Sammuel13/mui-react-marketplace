import { useEffect } from "react";
import { Container } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import Footer from "./components/footer";

function App() {
    useEffect(() => {
        document.title = "Marketplace";
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="xl"
                sx={
                    {
                        // background: '#cfe8fc',
                    }
                }
            >
                <Appbar />
                <Footer />
                {/*
                searchbox
                appdrawer
                */}
            </Container>
        </ThemeProvider>
    );
}

export default App;
