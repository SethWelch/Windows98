import "./App.css"
import { Grid, ThemeProvider, createTheme } from "@mui/material"

import { default as lightTheme } from "./MuiTheme"
import Desktop from "./Desktop"

import { Analytics } from "@vercel/analytics/react"

function App() {
  const theme = createTheme(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center' sx={{ height: "100vh", width: "100vw", background: "black" }}>
        <Grid item>
          <Desktop />
        </Grid>
      </Grid>
      <Analytics />
    </ThemeProvider>
  )
}

export default App
