import React, { useEffect, useState } from "react"

import { Box } from "@mui/material"

import background from "./assets/images/bubbles2.png"
import Calculator from "./programs/Calculator"
import InternetExplorer from "./assets/icons/InternetExplorer"
import Notepad from "./assets/icons/Notepad"
import Documents from "./assets/icons/Documents"
import StartBar from "./components/StartBar"
import Minesweeper from "./assets/icons/Minesweeper"
import RecycleBin from "./assets/icons/RecycleBin"

function Desktop() {
  const [windowScale, setWindowScale] = useState()

  const resizing = () => {
    let container = document.getElementById("desktop")
    const minScale = 0.5
    const maxScale = 5
    let scale = Math.min(
      window.innerWidth / (container.offsetWidth + 8),
      window.innerHeight / (container.offsetHeight + 8)
    )
    scale = Math.min(maxScale, Math.max(minScale, scale))
    setWindowScale(scale)
  }

  window.onresize = function () {
    resizing()
  }

  useEffect(() => {
    resizing()
  }, [])

  return (
    <Box
      id='desktop'
      sx={{
        backgroundImage: `url(${background})`,
        position: "relative",
        height: "600px",
        width: "800px",
        overflow: "hidden",
        transform: `scale(${windowScale})`,
        transformOrigin: "top",
        margin: "2px",
      }}
    >
      <InternetExplorer sx={{ height: 32, width: 32 }} />
      <Documents sx={{ height: 32, width: 32 }} />
      <Notepad sx={{ height: 32, width: 32 }} />
      <Minesweeper sx={{ height: 32, width: 32 }} />
      <RecycleBin sx={{ height: 32, width: 32 }} />

      <Calculator />

      <StartBar />
    </Box>
  )
}

export default Desktop
