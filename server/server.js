const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;

// Função para construir o projeto Vue.js
const buildVueApp = () => {
  return new Promise((resolve, reject) => {
    console.log('Construindo o aplicativo Vue...');
    exec('npx vite build', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao construir o aplicativo: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(`Stdout: ${stdout}`);
      resolve();
    });
  });
};

// Build e inicie o servidor
async function init() {
  try {
    await buildVueApp();
    
    // Servindo arquivos estáticos do diretório 'dist'
    app.use(express.static(path.join(__dirname, '../dist')));
    
    // Rota para todas as solicitações, para servir o SPA
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    
    // Rota de fallback para outras solicitações
    app.use((req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    
    // Inicie o servidor
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao inicializar o servidor:', error);
  }
}

init();