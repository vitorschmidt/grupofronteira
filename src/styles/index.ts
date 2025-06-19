// Exportações centralizadas das configurações de estilo
export { colors } from './colors';
export type { Colors } from './colors';

// Utilitários de estilo
export const styleUtils = {
  // Função para aplicar opacidade às cores
  withOpacity: (color: string, opacity: number): string => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },
  
  // Função para criar gradientes
  gradient: (from: string, to: string, direction: string = 'to right'): string => {
    return `linear-gradient(${direction}, ${from}, ${to})`;
  },
  
  // Função para criar sombras com as cores do tema
  shadow: (color: string, opacity: number = 0.1): string => {
    return `0 4px 6px -1px ${styleUtils.withOpacity(color, opacity)}`;
  }
} as const; 