import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      {user ? <UserDetails /> : <Login />}
    </div>
  );
};

const Root = () => {
  <Provider store={store}>
    <App />
  </Provider>
};

export default Root;
