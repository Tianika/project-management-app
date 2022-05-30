import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './i18n';
import { LoadingWrapper } from './styles/global';
import { store } from './redux/store/store';
import ErrorBoundary from './app/components/errorBoundaries/ErrorBoundaries';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Suspense fallback={<LoadingWrapper />}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  </Provider>
);
