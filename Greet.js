import React from 'react'

//function Greet() {
//  return <h1>Hello Murali</h1>
//}

//Destructuring props in the parenthesis

//const Greet = ({ name, heroName, children }) => {
//Destructuring props in the function body
const Greet = (props) => {
    const { name, heroName, children } = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName} </h1>
            {children}
        </div>
    )
}






export default Greet 