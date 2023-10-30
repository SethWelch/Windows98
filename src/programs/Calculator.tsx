import React from 'react'
import Window from '../components/Window'
import Button from '../components/Button'
import { Box, Grid } from '@mui/material'

const gap = '4px'
const numberColor = '#0025f5'
const funcColor = '#e43222'

function Calculator() {
  const [value, setValue] = React.useState('0')
  const [, setProblem] = React.useState(null)

  const getNumberButton = (number: number | string) => {
    // const addNumberToValue = (number) => {}

    return (
      <Button
        width={32}
        height={28}
        color={numberColor}
        onClick={() => {
          console.log(number, value)
          if (value && value === '0') {
            setValue('' + number)
          } else {
            setValue((prev) => prev + '' + number)
          }
        }}
      >
        {number}
      </Button>
    )
  }

  const getFunctionButton = (func) => {
    return (
      <Button width={32} height={28} color={funcColor} onClick={() => {}}>
        {func}
      </Button>
    )
  }

  const getValue = () => {
    return value
  }

  return (
    <Window height={220} width={156} title="Calculator">
      <Box sx={{ padding: 1 }}>
        <Box sx={{ background: 'white', color: 'black', height: 24, mb: 1 }}>
          {getValue()}
        </Box>
        <Grid container justifyContent="center" alignItems="middle" gap={gap}>
          <Grid container item gap={gap} justifyContent="flex-end">
            <Button
              width={68}
              height={28}
              color={funcColor}
              onClick={() => {
                setValue('0')
                setProblem(null)
              }}
            >
              Backspace
            </Button>
            <Button
              width={68}
              height={28}
              color={funcColor}
              onClick={() => {
                setValue('0')
                setProblem(null)
              }}
            >
              C
            </Button>
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(7)}
            {getNumberButton(8)}
            {getNumberButton(9)}
            {getFunctionButton('/')}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(4)}
            {getNumberButton(5)}
            {getNumberButton(6)}
            {getFunctionButton('*')}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(1)}
            {getNumberButton(2)}
            {getNumberButton(3)}
            {getFunctionButton('-')}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(0)}
            {getNumberButton('.')}
            {getFunctionButton('=')}
            {getFunctionButton('+')}
          </Grid>
        </Grid>
      </Box>
    </Window>
  )
}

export default Calculator
