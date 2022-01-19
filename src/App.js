import React from 'react'
import './App.css'

function App(props) {
  return (
    <div className='container'>
      <div className='title'>
        Hello Word!!!
      </div>
      <div
        onClick={() => {
          alert('submitted')
        }}
        className='button'
      >
        Submit
      </div>
    </div>
  )
}

export default App