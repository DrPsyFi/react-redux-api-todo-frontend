import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shortid from 'shortid'

import { handleAdd } from '../actions'

const AddTodo = ({ handleAdd }) => {

  const add = (event) => {
    event.preventDefault();
    handleAdd({
      id: shortid.generate(),
      task: event.target.task.value,
      checked:false
    })
    event.target.task.value = ''
  }

  return (
    <form onSubmit={add}>
      <input name="task" type="text"/>
      <input type="submit" value="add"/>
    </form>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ handleAdd }, dispatch)

export default connect(null, mapDispatchToProps)(AddTodo)
