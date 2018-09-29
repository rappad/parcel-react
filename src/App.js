import React, { Component } from 'react'

import Form from './component/Form'
import List from './component/List'

export default class App extends Component {
  render() {
    return (
      <main>
        <h3>Todo</h3>
        <Form />
        <List />
      </main>
    )
  }
}
