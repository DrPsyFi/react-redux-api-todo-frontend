import React from 'react';
import AddTodo from '../containers/AddTodo'
import Toolbar from '../containers/Toolbar'
import TodoList from '../containers/TodoList'

const App = () => (
  <div>
    <AddTodo />
    <Toolbar />
    <TodoList />
  </div>
)

export default App;
