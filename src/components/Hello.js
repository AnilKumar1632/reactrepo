import React from 'react'

const Hello = () => {
    /* return (
        <div className='dummyClass'>
            <h1>Hello Anil Kumar Reddy</h1>
        </div>
    ) */
    return React.createElement('div',{id:"hello"},React.createElement('h1',{className:'dummyclass'},"helo"))
}

export default Hello