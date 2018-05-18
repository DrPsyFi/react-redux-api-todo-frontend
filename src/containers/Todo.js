import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleCheck } from '../actions'

const Todo = ({ todo: {id, checked, task}, handleCheck }) => (
  <li>
    <input
      type="checkbox"
      checked={ checked }
      onChange={ () => handleCheck(id) }
    />
    <span>
      { task }
    </span>
  </li>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({ handleCheck }, dispatch)

export default connect(null, mapDispatchToProps)(Todo)
