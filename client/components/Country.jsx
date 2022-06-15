import React from 'react'
import countries from '../../data/countries'

import { useParams } from 'react-router-dom'

const countriesArr = Object.keys(countries)

function Country () {
  const { name, code } = useParams()
  console.log(code)
  console.log(countries[0])

  const selected = countries.find(selected => selected.code === code)

  console.log(countries[selected])

  return (
  <>
  <h1>Hello this is the page for {selected}</h1>

  {/* <ul>
      {countries[selected].countries.map(country => <li>{country.name}</li>)}
  </ul>
    */}
  </>
  )
}

export default Country
