import { useEffect } from "react";
import { Button, Container } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";

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
                {/*
          Appbar
          Banner
          Promotions
          title
          Products
          footer
          searchbox
          appdrawer
          */}
            </Container>
        </ThemeProvider>
    );
}

export default App;
