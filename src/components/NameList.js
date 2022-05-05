import React from 'react'
import Person from './Person'

function NameList() {
    const names = [{
        id:1,
        name: 'Anil',
        age: 21,
        skill: 'angular'
    }
    ,{
        id: 2,
        name: 'kumar',
        age: 21,
        skill: 'noskills'
    }
]
    const nameList = names.map(name => <Person person={name} />)
  return (
    <div>
        { nameList }
    </div>
  )
}

export default NameList