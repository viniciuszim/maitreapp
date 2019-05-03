import React, { Fragment } from 'react';

import Header from '../../components/Header';

import { Container } from './style';

const Welcome = () => (
  <Fragment>
    <Header title="Principal" />
    <Container>
      <h1>Welcome Page!</h1>
    </Container>
  </Fragment>
);

export default Welcome;
