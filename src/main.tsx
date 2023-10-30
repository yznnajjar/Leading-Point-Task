import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { ConfigProvider } from 'antd';

import store from './store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

// Base Style
import './index.scss';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1> Loading... </h1>} persistor={persistor}>
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <App />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
