import React, { Component } from 'react'

export default class ErrorHandler extends Component {
  constructor(){
    super()
    this.state = {
      error: false
    }
  }
  componentDidCatch(error, errorInfo){
    
    if(error){
      this.setState({
        error: true
      })
    }
  }
  render() {
    return (
  
        <React.Fragment>
      {
        this.state.error ?
          <div 
            style={{ 
              color: 'white',
              textAlign: 'center',
              backgroundColor: 'red'
            }}
          > 
          Something went wrong
          </div>
          :
          this.props.children
      }  
      </React.Fragment>
      
    )
  }
}
