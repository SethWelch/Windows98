import { ThemeProvider } from '@mui/material'

import theme from './MuiTheme'
import Desktop from './Desktop'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Desktop />
    </ThemeProvider>
  )
}

export default App
