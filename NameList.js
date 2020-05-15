import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'clarck',
            age: 25,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Diana',
            age: 27,
            skill: 'Css'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    const names = ['Murali', 'Krishna', 'Reddy']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

    return (
        <div>
            <div>{personList} </div>
            <div>{nameList} </div>
        </div>
    )

}
export default NameList