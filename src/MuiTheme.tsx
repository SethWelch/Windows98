import { createTheme } from '@mui/material'

const colorList = {
  buttonHighlight: '#ffffff',
  buttonFace: '#dfdfdf',
  buttonShadow: '#808080',
  surface: '#c0c0c0',
  textColor: '#222222',
  windowFrame: '#0a0a0a',
}

const borderList = {
  borderRaisedOuter: `inset -1px -1px ${colorList.windowFrame}, inset 1px 1px ${colorList.buttonHighlight}`,
  borderRaisedInner: `inset -2px -2px ${colorList.buttonShadow}, inset 2px 2px ${colorList.buttonFace}`,
  borderSunkenOuter: `inset -1px -1px ${colorList.buttonHighlight}, inset 1px 1px ${colorList.windowFrame}`,
  borderSunkenInner: `inset -2px -2px ${colorList.buttonFace}, inset 2px 2px ${colorList.buttonShadow}`,
  borderWindowOuter: `inset -1px -1px ${colorList.windowFrame}, inset 1px 1px ${colorList.buttonFace}`,
  borderWindowInner: `inset -2px -2px ${colorList.buttonShadow}, inset 2px 2px ${colorList.buttonHighlight}`,
}

const theme = createTheme({
  borders: {
    ...borderList,
  },
  colors: {
    ...colorList,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: '0',
          textShadow: `0 0 ${colorList.textColor}`,
          background: `${colorList.surface}`,
          boxShadow: `${borderList.borderRaisedOuter}, ${borderList.borderRaisedInner}`,
          fontFamily: 'MSSansSerif',
          textTransform: 'capitalize',
          fontWeight: 400,
          fontSize: 11,
          padding: 0,
          '&:active': {
            boxShadow: `${borderList.borderRaisedOuter}, ${borderList.borderRaisedInner}`,
            background: 'none',
            outline: 'none',
          },
          '&:hover': {
            boxShadow: `${borderList.borderRaisedOuter}, ${borderList.borderRaisedInner}`,
            background: 'none',
            outline: 'none',
          },
          '&:focus': {
            boxShadow: `${borderList.borderSunkenOuter}, ${borderList.borderSunkenInner}`,
            background: 'none',
            outline: 'none',
          },
        },
      },
    },
  },

  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
