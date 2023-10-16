import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function SingleFlightFetch(flight_no) {

  const res = await fetch(`https://rdpmarketplace.com/backend/flight/${flight_no}`)
  //console.log(SingleFlightFetch.data.data)
  const SingleFlightFetch = await res.json()
  return SingleFlightFetch.data
}