import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import Router from './components/Router.tsx'
import BackdropLoader from './components/BackdropLoader.tsx'

const LazyHeader = lazy(() => import("./components/Header.tsx"))
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <LazyHeader />
        <Offset />
      </Suspense>
      <main>
        <Box sx={{marginTop: 4}}/>
        <Suspense fallback={<BackdropLoader />}>
          <Router />
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App