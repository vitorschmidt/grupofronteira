# Grupo Fronteira - Website

Site institucional do Grupo Fronteira desenvolvido em Vue 3 + TypeScript + Vite + Vuetify.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages. Existem duas formas de fazer o deploy:

### Método 1: Deploy Automático (Recomendado)

1. **Configure o repositório no GitHub:**
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"
   - O workflow já está configurado em `.github/workflows/deploy.yml`

2. **Push para main:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

3. **Acesse o site:**
   - Será disponibilizado em: `https://[SEU-USUARIO].github.io/grupofronteira/`

### Método 2: Deploy Manual

```bash
# Instalar dependências
npm install

# Build do projeto
npm run build

# Deploy manual
npm run deploy
```

## 🛠 Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas da aplicação
├── assets/         # Imagens e recursos
├── styles/         # Arquivos de estilo
└── router/         # Configuração de rotas
```

## 🔧 Configurações para GitHub Pages

- `vite.config.ts`: Configurado com base path para GitHub Pages
- `.github/workflows/deploy.yml`: Workflow de deploy automático
- `src/router/index.ts`: Router configurado com BASE_URL correto

## 📱 Páginas

- **Home** (`/`): Página principal com todas as seções
- **Marca** (`/marca`): Página dedicada ao conceito da marca

## 🎨 Tecnologias

- Vue 3
- TypeScript
- Vite
- Vuetify
- Vue Router
- Material Design Icons

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
