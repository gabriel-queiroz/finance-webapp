import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure()
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect();

console.tron = reactotron;

export default reactotron;
