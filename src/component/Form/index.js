import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../action'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }

    this.onAddTodo = this.onAddTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onAddTodo() {
    this.props.addTodo({ name: this.state.todo })
    this.setState({ todo: '' })
  }

  handleChange(event) {
    this.setState({ todo: event.target.value })
  }

  render() {
    const { todo } = this.state
    return (
      <section>
        <input type="text" onChange={this.handleChange} value={todo} />
        <button onClick={this.onAddTodo}>Add</button>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(Form)
