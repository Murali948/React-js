import React, { Component } from 'react'

class EventBlind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        //{3rd method and recommended}   this.changeMessage = this.changeMessage.bind(this)
    }


    changeMessage() {
        //1st mesthod
        this.setState({
            message: 'GoodBye!'
        })
    }
    // 4th mesthod 

    //  changeMessage = () => {
    //    this.setState({
    //      message: 'GoodBye!'
    //})
    //}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMessage.bind(this)}>click</button>
                {/*<button onClick={this.changeMessage}>click</button>
                {/*1st  
                2nd <button onClick={() => this.changeMessage}>click</button>*/}

            </div>
        )
    }
}

export default EventBlind
