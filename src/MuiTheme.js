const colors = {
  buttonHighlight: "#ffffff",
  buttonFace: "#dfdfdf",
  buttonShadow: "#808080",
  surface: "#c0c0c0",
  textColor: "#222222",
  windowFrame: "#0a0a0a",
}

const borders = {
  borderRaisedOuter: `inset -1px -1px ${colors.windowFrame}, inset 1px 1px ${colors.buttonHighlight}`,
  borderRaisedInner: `inset -2px -2px ${colors.buttonShadow}, inset 2px 2px ${colors.buttonFace}`,
  borderSunkenOuter: `inset -1px -1px ${colors.buttonHighlight}, inset 1px 1px ${colors.windowFrame}`,
  borderSunkenInner: `inset -2px -2px ${colors.buttonFace}, inset 2px 2px ${colors.buttonShadow}`,
  borderWindowOuter: `inset -1px -1px ${colors.windowFrame}, inset 1px 1px ${colors.buttonFace}`,
  borderWindowInner: `inset -2px -2px ${colors.buttonShadow}, inset 2px 2px ${colors.buttonHighlight}`,
}

const theme = {
  borders: {
    ...borders,
  },
  palette: {
    ...colors,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "primary",
      },
      styleOverrides: {
        root: {
          textShadow: `0 0 ${colors.textColor}`,
          background: `${colors.surface}`,
          boxShadow: `${borders.borderRaisedOuter}, ${borders.borderRaisedInner}`,
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            // add css
          },
        },
      ],
    },
  },

  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}

export default theme
