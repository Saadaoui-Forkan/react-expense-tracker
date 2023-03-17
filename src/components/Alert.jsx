import React from 'react'

function Alert({errorText, errorAmount}) {
  return (
    <div className='alert'>
        <p>{errorText}</p>
        <p>{errorAmount}</p>
    </div>
  )
}

export default Alert
