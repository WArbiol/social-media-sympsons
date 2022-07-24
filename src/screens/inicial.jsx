import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Add from '../components/NewPost'
import { useState } from 'react'

function InicialScreen() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default InicialScreen