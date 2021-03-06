import React, { useEffect } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { AuthProvider, useAuth } from './providers/AuthProvider';

import Header from './components/shared/Header';

const store = initStore();

const Providers = ({children}) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Provider>
  );
};

const WoloxApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService]);

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  );
};

const App = () => {
  return (
    <Providers>
      <WoloxApp />
    </Providers>
  );
};

export default App;
