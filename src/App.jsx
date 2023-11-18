import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Typography from '@mui/material/Typography';
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { theme } from './theme/theme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
