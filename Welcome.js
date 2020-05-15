import React, { Component } from 'react'
class welcome extends Component {
    render() {
        const { name, heroName } = this.props
        //const{state1,stae2}=this.state
        return (<h1>Welcome {name}
        a.k.a {heroName}</h1>

        )
    }
}
export default welcome