export const theme = Object.freeze({
  colors: {
    darkTextColor: '#010101',
    lightTextColor: '#fff',
    secondaryTextColor: 'gray',
    primaryBgColor: '#d4daeb',
    secondaryBgColor: '#fff',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`,
});
