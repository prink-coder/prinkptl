import React from 'react'
export const Card = (props) => {
  return (
    <div>
        <div className="parent">
            <div className="card">
                <h1>My Name is {props.name}</h1>
                <h1>My Age is {props.age} Year Old</h1>
            </div>
        </div>
    </div>
  )
}
