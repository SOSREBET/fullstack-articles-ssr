import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router.tsx'
import BackdropLoader from './components/BackdropLoader.tsx'
import { styled } from '@mui/material'

// import AutoScrollTop from './components/AutoScrollTop.tsx'

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
        {/* <AutoScrollTop /> */}
        <Suspense fallback={ <BackdropLoader /> }>
          <Router />
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App