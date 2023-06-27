import React from "react"
import Window from "../components/Window"
import Button from "../components/Button"
import { Box, Grid, TextField } from "@mui/material"

const gap = "4px"
const numberColor = "#0025f5"
const funcColor = "#e43222"

function Calculator() {
  const [value, setValue] = React.useState()
  const [problem, setProblem] = React.useState()

  const getNumberButton = (number) => {
    return (
      <Button width={32} height={28} color={numberColor}>
        {number}
      </Button>
    )
  }

  const getFunctionButton = (func) => {
    return (
      <Button width={32} height={28} color={funcColor}>
        {func}
      </Button>
    )
  }

  return (
    <Window height={236} width={160} title='Calculator'>
      <Box sx={{ padding: 1 }}>
        <Box sx={{ background: "white", height: 24, mb: 1 }}>{value}</Box>
        <Grid container justifyContent='center' alignItems='middle' gap={gap}>
          <Grid container item gap={gap} justifyContent='flex-end'>
            <Button width={64} height={28} color={funcColor}>
              C
            </Button>
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(7)}
            {getNumberButton(8)}
            {getNumberButton(9)}
            {getFunctionButton("/")}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(4)}
            {getNumberButton(5)}
            {getNumberButton(6)}
            {getFunctionButton("*")}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(1)}
            {getNumberButton(2)}
            {getNumberButton(3)}
            {getFunctionButton("-")}
          </Grid>
          <Grid container item gap={gap}>
            {getNumberButton(0)}
            {getNumberButton(".")}
            {getFunctionButton("=")}
            {getFunctionButton("+")}
          </Grid>
        </Grid>
      </Box>
    </Window>
  )
}

export default Calculator
