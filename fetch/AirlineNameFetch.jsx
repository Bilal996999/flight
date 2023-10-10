import axios from 'axios'

export default async function AirlineNameFetch(name) {

    const airline = await axios.get(`http://localhost/flight/airline/${name}`)
    //console.log(airline.data)
    return airline.data.data
  }