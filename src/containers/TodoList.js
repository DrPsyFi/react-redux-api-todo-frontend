import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({list}) => (
  <ul>
    {
      list.map(ele => <Todo key={ele.id} todo={ele} />)
    }
  </ul>
)

const mapStateToProps = ({ list }) => ({ list })

export default connect(mapStateToProps)(TodoList)
