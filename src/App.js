import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import GlobalStyle from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </Container>
          </Wrapper>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
