import React, { Component } from 'react'

export default class Layouts extends Component {
  render() {
    return (
      <div>
        <header>
        
        </header>
        {this.props.children}
        <footer></footer>
      </div>
    )
  }
}
