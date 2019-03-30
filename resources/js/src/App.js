import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';

import FileReader from './containers/file-reader/index';

export default class App extends Component {
    render() {
        return (
          <FileReader />
        )
    }
}