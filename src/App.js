import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// import TodoInput from './components/TodoInput';
// uuidv4();

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'wake down' },
    ],
    id: uuidv4(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    console.log('handleChange');
  };
  handleSubmit = (e) => {
    console.log('handleSubmit');
  };
  clearList = () => {
    console.log('clearList');
  };
  handleDelete = (id) => {
    console.log(`handleDelete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handleEdit ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-1">
              <h3 className="text-capitalize text-center">todo input</h3>
            </div>
          </div>
          <div className="row">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
