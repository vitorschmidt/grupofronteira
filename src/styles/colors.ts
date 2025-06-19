export const colors = {
  primary: '#231f20',    // Preto/Cinza escuro
  secondary: '#ffe027',  // Amarelo
  white: '#ffffff',      // Branco
  
  primaryDark: '#1a1618',
  primaryLight: '#2c2729',
  secondaryDark: '#e6c622',
  secondaryLight: '#fff34a',
  
  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
  
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

export type Colors = typeof colors; 