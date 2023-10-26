import {
    Dialog,
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = ({ isOpen }) => {
    return (
        <Dialog open={isOpen}>
            <Paper
                style={{
                    position: "fixed",
                    top: "70px",
                    right: "20px",
                    padding: "20px",
                    height: "400px",
                    width: "280px",
                    margin: "auto auto",
                }}
            >
                <Grid container direction="column" alignItems="center">
                    <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h5">
                        Login
                    </Typography>
                </Grid>
                <TextField
                    label="Nome de Usuário"
                    placeholder="Digite seu nome de usuário"
                    fullWidth
                    required
                    style={{ marginBottom: "1rem" }}
                />
                <TextField
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    fullWidth
                    required
                />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Lembrar-me"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{ margin: "8px 0" }}
                    fullWidth
                >
                    Entrar
                </Button>
                <Typography>
                    <Link href="#">Esqueceu Senha?</Link>
                </Typography>
                <Typography>
                    {" "}
                    Não possui uma conta? <Link href="#">Criar conta</Link>
                </Typography>
            </Paper>
        </Dialog>
    );
};

export default Login;
