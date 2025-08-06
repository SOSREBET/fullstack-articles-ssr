import { lazy, Suspense } from 'react'
import { Box, styled, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux';
import theme from './MUITheme.ts';
import { setupStore } from './store/store.ts'
import Router from './components/Router.tsx'
import BackdropLoader from './components/BackdropLoader.tsx'
import { HelmetProvider } from 'react-helmet-async';

const LazyHeader = lazy(() => import("./components/Header.tsx"))
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)
const store = setupStore()

function App() {
  return (
    <main>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Suspense>
              <LazyHeader />
              <Offset />
            </Suspense>

            <Box sx={{ marginTop: 4 }} />
            <Suspense fallback={<BackdropLoader />}>
              <Router />
            </Suspense>
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    </main>
  )
}

export default App