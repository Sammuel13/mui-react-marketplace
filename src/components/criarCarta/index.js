import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function CadastrarCarta() {
  const [cartaImage, setCartaImage] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    descricao: '',
    // Outros campos de informações da carta
  });

  const handleDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setCartaImage(image);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados da carta para o servidor
  };

  return (
    <Container sx={{ paddingTop: '30px' }}>
      <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Imagem da Carta
              </Typography>
              <Box
                border="1px dashed #ccc"
                borderRadius="5px"
                textAlign="center"
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                minHeight="350px"
                p={2}
                onDrop={(e) => {
                  e.preventDefault();
                  handleDrop(e.dataTransfer.files);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
              >
                {cartaImage ? (
                  <img src={URL.createObjectURL(cartaImage)} alt="Carta" width="100%" />
                ) : (
                  <Typography color="textSecondary" >Arraste e solte a imagem da carta aqui</Typography>
                )}
                <UploadFileIcon fontSize="large" sx={{color: '#C2C2C2'}} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Informações da Carta
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nome da Carta"
                  name="nome"
                  value={formData.nome}
                  onChange={handleFormChange}
                />
                <TextField
                  fullWidth
                  label="Tipo da Carta"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleFormChange}
                />
                <TextField
                  fullWidth
                  label="Descrição da Carta"
                  name="descricao"
                  multiline
                  rows={4}
                  value={formData.descricao}
                  onChange={handleFormChange}
                />
                {/* Outros campos do formulário */}
                <Box mt={2}>
                  <Button
                    sx={{background:'#E3350D'}}
                    variant="contained"
                    // color="secondary"
                    startIcon={<CloudUploadIcon />}
                    type="submit"
                  >
                    Cadastrar Carta
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastrarCarta;
