import React, { Component } from 'react';
import {Container} from 'reactstrap';

import AppNavbar from './components/layout/AppNavbar';
import TodoList from './components/layout/TodoList';
import ItemModal from './components/layout/ItemModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <TodoList />

        </Container>
      </div>
    );
  }
}

export default App;
