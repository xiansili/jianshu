import React from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header/index.js";
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {store}>
      <Header />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
