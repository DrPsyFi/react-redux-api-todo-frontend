import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleCheckAll, handleDelete } from '../actions'

class Toolbar extends Component {
  constructor(props){
    super(props)
    this.state = { allChecked: false}
  }

  handleCheckAll = () => {
    this.props.handleCheckAll(this.state.allChecked)
    this.setState({allChecked: !this.state.allChecked})
  }

  delete = () => {
    this.props.handleDelete()
    this.setState({allChecked:false})
  }

  render(){
    return (
      <div>
        <input
          type="checkbox"
          checked={ this.state.allChecked }
          onChange={ this.handleCheckAll }
        />
        <button
          onClick={ this.delete }
        >
          Delete
        </button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleCheckAll, handleDelete }, dispatch)

export default connect(null, mapDispatchToProps)(Toolbar)
