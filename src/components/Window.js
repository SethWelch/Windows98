import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import Draggable from "react-draggable"
import Button from "./Button"
import { useTheme } from "@emotion/react"

function Window({ height, width, title, children }) {
  const theme = useTheme()

  return (
    <Draggable handle='#topbar'>
      <Box
        sx={{
          width,
          height,
          background: `${theme.palette.surface}`,
          boxShadow: `${theme.borders.borderWindowOuter}, ${theme.borders.borderWindowInner}`,
          padding: "2px",
        }}
      >
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          direction='row'
          id='topbar'
          sx={{ width: "auto", background: "linear-gradient( to right, #000c7a, #3884ca)", padding: "1px", mr: "1px" }}
        >
          <Grid item>
            <Typography
              sx={{
                color: "white",
                fontFamily: "MSSansSerif",
                textTransform: "capitalize",
                fontWeight: 600,
                fontSize: 10,
                ml: "2px",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex" }}>
            <Button height={14} width={14} sx={{ mr: "2px" }}>
              _
            </Button>
            <Button height={14} width={14}>
              x
            </Button>
          </Grid>
        </Grid>
        {children}
      </Box>
    </Draggable>
  )
}

export default Window
