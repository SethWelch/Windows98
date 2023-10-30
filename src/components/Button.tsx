import React from 'react'

import { Box, Button as MuiButton, SxProps } from '@mui/material'

const black = '#000000'

interface ButtonProps {
  height?: number
  width?: number
  color?: string
  sx?: SxProps
  onClick: () => void
  startIcon?: React.ReactNode
  children: React.ReactNode | string
  keepFocus?: boolean
}

const buttonStyle = (
  height: number | undefined,
  width: number | undefined,
  color: string | undefined
) => ({
  height: height || '22px',
  color: color || black,
  minWidth: width || 54,
})

function Button({
  height,
  width,
  color,
  sx,
  onClick,
  startIcon,
  children,
  keepFocus,
}: ButtonProps) {
  const style: SxProps = buttonStyle(height, width, color)
  const randomNumber = Math.floor(Math.random() * 1000) + 1

  const clickEvent = (): void => {
    const btn = document.getElementById(`button-${randomNumber}`)

    setTimeout(() => {
      btn?.blur()
    }, 50)
    onClick()
  }

  return (
    <MuiButton
      disableRipple
      id={`button-${randomNumber}`}
      onClick={() => {
        clickEvent()
      }}
      startIcon={startIcon}
      sx={{
        ...style,
        '& .MuiButton-startIcon': {
          marginRight: 0,
        },
        '&:focus': {
          '& .MuiBox-root': {
            display: 'block',
          },
        },
        ...sx,
      }}
    >
      {keepFocus && (
        <Box
          sx={{
            display: 'none',
            border: '1px dotted black',
            position: 'absolute',
            height: (height || 22) - 6,
            width: (width || 54) - 6,
            fontFamily: 'MSSansSerif',
          }}
        />
      )}
      {children}
    </MuiButton>
  )
}

export default Button
