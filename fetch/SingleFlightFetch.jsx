import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function SingleFlightFetch(flight_no) {

  const SingleFlightFetch = await axios.get(`https://rdpmarketplace.com/backend/flight/${flight_no}`)
  //console.log(SingleFlightFetch.data.data)
  return SingleFlightFetch.data.data
}