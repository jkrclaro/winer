import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
        'Titillium Web:300,400,700', 'sans-serif',
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
