import React from 'react'
import continents from '../../data/continents'
import { Link } from 'react-router-dom'

const continentsArr = Object.keys(continents)
function Nav() {
  console.log(Object.keys(continents) )
  return (
    <div>
      <h2>Nav</h2>
      <ul>
  
    {continentsArr.map(name => <Link to ={`/continents/${name}`}> <li>{name}</li></Link> )}

      </ul>
    </div>
  )
}

export default Nav
