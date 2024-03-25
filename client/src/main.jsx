import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { store } from '../store/store.js'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider  client={queryClient}>
        <BrowserRouter>
          <ChakraProvider>
            <ColorModeScript />
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
