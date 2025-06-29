FROM node:18-alpine
WORKDIR /app

# 1. Copia os arquivos críticos primeiro
COPY package*.json ./
COPY public/ public/
COPY src/index.js src/ 

# 2. Instala dependências
RUN npm install

# 3. Copia todo o resto
COPY . .

# Verificação final
RUN [ -f src/index.js ] || (echo "ERRO: index.js não encontrado em src/" && exit 1)

CMD ["npm", "start"]