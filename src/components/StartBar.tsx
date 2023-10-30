import { useEffect, useState } from 'react'

import { Box, Grid, Typography } from '@mui/material'

import logo from '../assets/icons/start-button.png'
import Button from './Button'

const white = '#ffffff'
const grey = '#c0c0c0'
const darkGrey = '#7e7e7e'
const black = '#000000'

function StartBar() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: grey,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTop: '1px solid #fff',
        borderTopStyle: 'groove',
        padding: '2px',
      }}
    >
      <Grid item sx={{ display: 'flex' }}>
        <Box
          sx={{
            borderRight: '1px solid #000',
            borderBottom: '1px solid #000',
            height: 22,
            width: 'fit-content',
            display: 'contents',
          }}
        >
          <Button
            sx={{ fontWeight: 600 }}
            startIcon={
              <img
                src={logo}
                style={{ height: 16, width: 20, marginRight: '2px' }}
              />
            }
            onClick={() => {}}
          >
            Start
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            borderBottom: `1px solid ${white}`,
            borderRight: `1px solid ${white}`,
            height: 22,
            width: 'fit-content',
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderLeft: `1px solid ${darkGrey}`,
              borderTop: `1px solid ${darkGrey}`,
              borderRadius: '0',
              height: 22,
              minWidth: 72,
              padding: 0,
            }}
          >
            <Grid item />
            <Grid item sx={{ mr: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'MSSansSerif',
                  textTransform: 'capitalize',
                  fontWeight: 400,
                  fontSize: 11,
                  color: black,
                }}
              >
                {date.toLocaleTimeString([], { timeStyle: 'short' })}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default StartBar
