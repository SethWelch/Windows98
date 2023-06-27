import React from "react"

import { Box, Button as MuiButton } from "@mui/material"

const black = "#000000"

function Button({ height, width, color, sx, children, rest }) {
  return (
    <MuiButton
      sx={{
        borderRadius: "0",
        height: height || "22px",
        fontFamily: "MSSansSerif",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 11,
        color: color || black,
        minWidth: width || 54,
        padding: 0,
        // background: "#c0c0c0",
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default Button
