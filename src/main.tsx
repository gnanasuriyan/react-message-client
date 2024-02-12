import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Loader } from '@gilbarbara/components';
import { PersistGate } from 'redux-persist/lib/integration/react';

import ErrorHandler from '~/components/ErrorHandler';
import GlobalStyles from '~/containers/GlobalStyles';

import { persistor, store } from '~/store';

import Root from './root';

window.store = store;

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <PersistGate loading={<Loader block size={100} />} persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
          <HelmetProvider>
            <Root />
          </HelmetProvider>
        </ErrorBoundary>
        <GlobalStyles />
      </PersistGate>
    </Provider>,
  );
}
