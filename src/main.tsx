import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from '@shared/redux/store'
import { InventoryPage } from '@pages/Inventory'
import { PersistGate } from 'redux-persist/integration/react'

import '@shared/assets/styles/main.scss';
import { ToastContainer } from 'react-toastify'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <InventoryPage />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
