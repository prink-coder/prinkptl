import React from 'react'

export const Card2 = (props) => {
  return (
    <div className="card">
        <div>
        <div className="top">
            <img src={props.logo} alt="logo" />
            <button>Save</button>
        </div>
        <div className="center">
            <div className="gap">
                <h3>{props.company}</h3> <span>{props.date}</span>
            </div>
            <h2>{props.post}</h2>
            <div className="tag">
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
        </div>
    </div>
    <div className="bottom">
        <h3>{props.pay}
            <p>{props.location}</p>
        </h3>
        
        <div>
            <button>Apply Now</button>
        </div>
    </div>
    </div>
  )
}
