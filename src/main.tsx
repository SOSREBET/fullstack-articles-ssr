import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './css/index.css'
import './css/normalize.css'

import { setupStore } from './store/store.ts'
import App from './App.tsx'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <Provider store={ store }>
    <App />
  </Provider>
)
