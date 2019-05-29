import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import env from '../env';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: env.USER_HOST })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
