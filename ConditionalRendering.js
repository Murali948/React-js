import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Murali</div>

        {/*return this.state.isLoggedIn ?
            <div>Welcome Murali</div> :
        <div>Welcome Guest</div>*/}

        {/*  let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Murali</div>
        }

        else {
            message = <div>Welcome Guest</div>
        }
        return message*/}


        {/* if (this.state.isLoggedIn) {
            return <div>Welcome Murali</div>
        }
        else {
            return <div>Welcome Guest</div>
        }*/}


    }
}

export default ConditionalRendering
