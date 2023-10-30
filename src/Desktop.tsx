import { Box } from '@mui/material'

import background from './assets/images/bubbles2.png'
import Calculator from './programs/Calculator'
import InternetExplorer from './assets/icons/InternetExplorer'
import Notepad from './assets/icons/Notepad'
import Documents from './assets/icons/Documents'
import StartBar from './components/StartBar'
import Minesweeper from './assets/icons/Minesweeper'
import RecycleBin from './assets/icons/RecycleBin'

function Desktop() {
  return (
    <Box
      id="desktop"
      sx={{
        backgroundImage: `url(${background})`,
        position: 'relative',
        height: 'calc(100vh - 30px)',
        width: 'calc(100vw - 50px)',
        overflow: 'hidden',
        transformOrigin: 'top',
        margin: '2px',
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
