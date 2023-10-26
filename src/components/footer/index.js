import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <Box
            sx={{
                // background: Colors.shaft,
                background: '#0066B3',
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" },
                display: 'flex', // Adicionando flex container
                flexDirection: 'column', // Alinhando itens verticalmente
                alignItems: 'center', // Alinhando itens horizontalmente
                textAlign: 'center', // Alinhando o texto centralmente
            }}
        >
            <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom: { xs: '50px', sm: '0px' } }}>
                {/* <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    {/* <Typography variant="caption2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatem. Ut enim ad minima veniam, quis
                        nostrum.
                    </Typography> */}
                {/* <Box
                    sx={{
                        mt: 4,
                        color: Colors.dove_gray,
                    }}
                >
                    <FacebookIcon sx={{ mr: 1 }} />
                    <TwitterIcon sx={{ mr: 1 }} />
                    <InstagramIcon />
                </Box>
            </Grid> */}
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Informação</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Sobre nós
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Rastreamento
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Política
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Condições
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Minha Conta</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Meu Carrinho
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Minha Conta
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Lista de Desejos
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">Contact Us</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                1234 Some Street, Some City
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                123-456-7890
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                marketplace@email.com
                            </Typography>
                        </ListItemText>
                        <Box
                            sx={{
                                color: Colors.white,
                            }}
                        >
                            <FacebookIcon sx={{ mr: 1 }} />
                            <TwitterIcon sx={{ mr: 1 }} />
                            <InstagramIcon />
                        </Box>
                    </List>
                </Grid>
            </Grid>
        </Box >
    );
}
