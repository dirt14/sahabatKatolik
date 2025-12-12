// Sistem Warna Konsisten untuk Sahabat Katolik
export const colors = {
  // Primary Colors - Emerald (Hijau Soft)
  primary: {
    50: 'emerald-50',
    100: 'emerald-100',
    400: 'emerald-400',
    500: 'emerald-500',
    600: 'emerald-600',
    700: 'emerald-700',
    800: 'emerald-800',
    900: 'emerald-900'
  },
  
  // Secondary Colors - Amber (Emas Soft)
  secondary: {
    50: 'amber-50',
    100: 'amber-100',
    400: 'amber-400',
    500: 'amber-500', 
    600: 'amber-600',
    700: 'amber-700',
    800: 'amber-800',
    900: 'amber-900'
  },
  
  // Accent Colors - Blue (untuk komunitas)
  accent: {
    50: 'blue-50',
    100: 'blue-100',
    400: 'blue-400',
    500: 'blue-500',
    600: 'blue-600',
    700: 'blue-700',
    800: 'blue-800',
    900: 'blue-900'
  },
  
  // Neutral Colors
  neutral: {
    white: 'white',
    50: 'gray-50',
    100: 'gray-100',
    200: 'gray-200',
    300: 'gray-300',
    400: 'gray-400',
    500: 'gray-500',
    600: 'gray-600',
    700: 'gray-700',
    800: 'gray-800',
    900: 'gray-900'
  },
  
  // Liturgical Colors
  liturgical: {
    green: 'green-500',      // Masa Biasa
    white: 'white',          // Pesta/Hari Raya
    red: 'red-500',          // Martir/Roh Kudus
    purple: 'purple-500',    // Adven/Prapaskah
    rose: 'pink-400'         // Gaudete/Laetare
  }
} as const;

// Helper functions untuk konsistensi
export const getHeaderGradient = (page: 'home' | 'doa' | 'streaming' | 'liturgi' | 'komunitas' | 'tentang') => {
  const gradients = {
    home: `bg-gradient-to-br from-white via-${colors.neutral[50]} to-${colors.primary[50]}`,
    doa: `bg-gradient-to-r from-${colors.primary[600]} to-${colors.primary[700]}`,
    streaming: `bg-gradient-to-r from-red-600 to-red-700`,
    liturgi: `bg-gradient-to-r from-${colors.secondary[600]} to-${colors.secondary[700]}`,
    komunitas: `bg-gradient-to-r from-${colors.accent[600]} to-${colors.accent[700]}`,
    tentang: `bg-gradient-to-r from-${colors.primary[600]} to-${colors.primary[700]}`
  };
  return gradients[page];
};

export const getPrimaryButton = () => 
  `bg-${colors.primary[600]} hover:bg-${colors.primary[700]} text-white`;

export const getSecondaryButton = () => 
  `bg-white text-${colors.primary[600]} border-2 border-${colors.primary[600]} hover:bg-${colors.primary[50]}`;

export const getAccentButton = () => 
  `bg-${colors.accent[600]} hover:bg-${colors.accent[700]} text-white`;

export const getSectionDivider = () => 
  `w-24 h-1 bg-${colors.primary[600]} mx-auto`;

export const getCardBackground = () => 
  `bg-white dark:bg-${colors.neutral[800]}`;

export const getTextColors = () => ({
  heading: `text-${colors.neutral[800]} dark:text-white`,
  body: `text-${colors.neutral[600]} dark:text-${colors.neutral[400]}`,
  muted: `text-${colors.neutral[500]} dark:text-${colors.neutral[500]}`,
  primary: `text-${colors.primary[600]} dark:text-${colors.primary[400]}`,
  secondary: `text-${colors.secondary[600]} dark:text-${colors.secondary[400]}`
});

export const getGradientBox = () => 
  `bg-gradient-to-r from-${colors.primary[50]} to-${colors.secondary[50]} dark:from-${colors.primary[900]}/20 dark:to-${colors.secondary[900]}/20`;

export const getBorderColors = () => 
  `border-${colors.neutral[200]} dark:border-${colors.neutral[700]}`;

export const getHoverColors = () => ({
  primary: `hover:text-${colors.primary[600]} dark:hover:text-${colors.primary[400]}`,
  secondary: `hover:text-${colors.secondary[600]} dark:hover:text-${colors.secondary[400]}`,
  accent: `hover:text-${colors.accent[600]} dark:hover:text-${colors.accent[400]}`
});