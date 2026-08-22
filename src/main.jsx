import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ViteThemeProvider, ThemeAnimationType } from '@space-man/react-theme-animation'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViteThemeProvider
      themes={['light', 'dark']}
      defaultTheme="dark"
      attribute="class"
      animationType={ThemeAnimationType.CIRCLE}
      duration={600}
      storageKey="ts-511-theme"
    >
      <App />
    </ViteThemeProvider>
  </StrictMode>,
)
