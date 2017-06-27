import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import Form from './Components/Form';
import List from './Components/List';
import styles from './Styles/style.css';

class App extends Component {
    render() {
        return (
            <div id="app">
               <Form />
               <List />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, root);
