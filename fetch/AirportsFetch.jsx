import axios from 'axios'

export default async function AirportsFetch() {

  const airports = await axios.get('https://rdpmarketplace.com/backend/airports')
  //console.log(airlines.data)
  return airports.data
}

