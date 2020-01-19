import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './static/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css'
import './static/icomoonFonts/style.css'
import 'antd/dist/antd.css';

// import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import CustomeRoutes from './router/routes'

ReactDOM.render(
  <Provider store={store}>
    <CustomeRoutes/>
    {/* <App /> */}
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
