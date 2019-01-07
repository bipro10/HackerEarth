import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';

import uuid from 'uuid';


class TodoList extends Component {

  state = {
    items: [
      { id: uuid(), name: 'Make Cofee'},
      { id: uuid(), name: 'Code'},
      { id: uuid(), name: 'Sleep'},
      { id: uuid(), name: 'Code'}
    ]
  }
    
  handelDelete = (e) => {
    console.log(e.name, "deleted", e.id);
    const items = this.state.items.filter(item => item.id !== e.id);
    this.setState({items});
};

  render() {
    const {items} = this.state;
    return (
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item.id} timeout={1000} classNames="fade">
                <ListGroupItem > 
                  <Button className="remove-btn" color="danger" size="sm" onClick={()=>this.handelDelete(item)} > &times; </Button>
                  { item.name }
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
    )
  }
}


export default TodoList;