import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function AirlineFlight() {

  const res = await fetch(`https://rdpmarketplace.com/backend/airlineflightlatest`)
  const airlinesFlights = await res.json()
  //console.log(airlinesFlights)
  
  return airlinesFlights.data
}