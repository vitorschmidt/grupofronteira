# Configurações Globais de Estilo

Esta pasta contém todas as configurações globais de estilo do projeto Grupo Fronteira.

## Estrutura

### `colors.ts`
Contém a paleta de cores principal do projeto:
- **Primary**: `#231f20` (Preto/Cinza escuro)
- **Secondary**: `#ffe027` (Amarelo)
- **White**: `#ffffff` (Branco)

### `variables.css`
Variáveis CSS personalizadas que podem ser usadas em qualquer arquivo CSS/SCSS do projeto.

### `theme.ts`
Configuração completa do tema, incluindo tipografia, espaçamentos, breakpoints e outras propriedades de design.

### `index.ts`
Arquivo central de exportação com utilitários adicionais.

## Como Usar

### Em componentes Vue (TypeScript)
```typescript
import { colors, theme } from '@/styles';

// Usando cores
const primaryColor = colors.primary;
const secondaryColor = colors.secondary;

// Usando tema completo
const fontSize = theme.typography.fontSize.lg;
```

### Em arquivos CSS
```css
.minha-classe {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### Em componentes Vue (CSS scoped)
```vue
<template>
  <div class="container">
    <h1 class="title">Título</h1>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-primary);
  padding: var(--spacing-lg);
}

.title {
  color: var(--color-secondary);
  font-size: var(--font-size-2xl);
}
</style>
```

## Utilitários Disponíveis

- `withOpacity(color, opacity)`: Aplica opacidade a uma cor
- `gradient(from, to, direction)`: Cria gradientes
- `shadow(color, opacity)`: Cria sombras com cores personalizadas 