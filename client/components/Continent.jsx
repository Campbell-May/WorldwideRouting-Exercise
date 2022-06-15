import React from 'react'
import continents from '../../data/continents'

import { useParams } from 'react-router-dom'

const continentsArr = Object.keys(continents)

function Continent () {
  const { name } = useParams()
  console.log(name)

  const selected = continentsArr.find(selected => selected === name)

  console.log(continents[selected].image)

  return (
  <>
  <h1>Hello this is the page for {selected}</h1>
  <img src={"/images/" + continents[selected].image}/>
 
  <ul>
      {continents[selected].countries.map(country => <li>{country.name}</li>)}
  </ul>
   
  
  </>
  )
}

export default Continent
