import React from 'react'
import continents from '../../data/continents'

const continentsArr = Object.keys(continents)
function Nav() {
  console.log(Object.keys(continents) )
  return (
    <div>
      <h2>Nav</h2>
      <ul>
    {continentsArr.map(name =>  <li>{name}</li>)}

      </ul>
    </div>
  )
}

export default Nav
