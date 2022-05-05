import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true 
        }
    }


  render() {

    return this.state.isLoggedIn && <div>Welcome Anil Kumar</div>

    /* return(
        this.state.isLoggedIn ?
        <div>Welcome Anil kumar</div> : <div>Welcome Guest</div>
    ) */

    /* let message
    if (this.state.isLoggedIn){
        message = <div>Welcome Anil</div>
    } else {
        message = <div>Welcome guest</div>
    }
    return <div>{message}</div> */

      /* if (this.state.isLoggedIn){
          return <div>WELCOME ANIL KUMAR</div>
      } else {
          return <div>Welcome Guest</div>
      } */
  }
}

export default UserGreeting