import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function AirlineFetch() {

  const airlines = await axios.get('https://rdpmarketplace.com/backend/airlines')
  //console.log(airlines.data)
  return airlines.data
}

