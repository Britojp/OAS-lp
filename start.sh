#!/bin/bash

# Verificar dependências
echo "Verificando dependências..."
if [ ! -d "node_modules" ]; then
  echo "Instalando dependências..."
  npm install
fi

# Construir o aplicativo Vue.js
echo "Construindo o aplicativo Vue.js..."
npx vite build

# Iniciar o servidor Express
echo "Iniciando o servidor Express..."
node server/server.js