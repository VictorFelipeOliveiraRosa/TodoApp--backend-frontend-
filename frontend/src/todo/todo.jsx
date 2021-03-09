import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleAdd() {
    
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={ this.handleChange }
          handleAdd={ this.handleAdd }
          description={ description }
        />
        <TodoList />
      </div>
    )
  }
}
