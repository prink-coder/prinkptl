import React from 'react'

export const Name = (props) => {
  return (
    <div className="parent1">
      <div className="card1">
          <img src={props.img} alt="prink" />
         <h1>{props.user}</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatem.</p>
         <button>View Profile</button>
      </div>
     </div>
  )
}

// import React from 'react'
// import {Card} from './Card'
// import {Name} from './Name'
// export const App = () => {
//   return (
//      <div><h1>Hello GUYS</h1>
//      <Card/>
//      <Name user="Prink Patel" img="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
//      <Name user="Jash Bhandari" img="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
//      <Name user="Panth Bhandari" img="https://images.unsplash.com/photo-1484791157513-a10e2f89c2a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
//      </div>
//  )
// }










      { /* <Card name="Prink" age="22"/>
      <Card name="Panth" age="21"/>
      <Card name="Jash" age="14"/> */ }
 