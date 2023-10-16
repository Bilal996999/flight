import axios from 'axios'

export default async function AirportsFetch() {

  const res = await fetch('https://rdpmarketplace.com/backend/airports')
  //console.log(airlines.data)
  const airports = await res.json()
  return airports
}

