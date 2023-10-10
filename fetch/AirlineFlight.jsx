import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function AirlineFlight(slug) {

  const airlinesFlights = await axios.get(`https://rdpmarketplace.com/backend/airline-flight/${slug}`)
  //console.log(airlines.data)
  return airlinesFlights.data.data
}