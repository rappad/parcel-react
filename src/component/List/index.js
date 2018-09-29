import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const List = ({ todos }) => {
  return (
    <div className="list">
      <ul>{todos.length === 0 ? <div>Your todo is empty...</div> : todos.map(({ name }) => <li key={name}>{name}</li>)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

List.propTypes = {
  todos: PropTypes.array
}

export default connect(mapStateToProps)(List)
