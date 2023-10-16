import AirlineTable from '@/components/AirlineTable';
import axios from 'axios'

export default async function AirlineFetch(page) {

  const res = await fetch(`https://rdpmarketplace.com/backend/airlines?page=${page}`)
  const airlines = await res.json()
  //console.log(airlines)
  return airlines
}

