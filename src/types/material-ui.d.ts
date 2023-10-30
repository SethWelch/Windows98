import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    colors: colors
    borders: borders
  }

  interface ThemeOptions {
    colors: colors
    borders: borders
  }
}
