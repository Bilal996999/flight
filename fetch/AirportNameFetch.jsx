export default async function AirportNameFetch(name) {

    const res = await fetch(`https://rdpmarketplace.com/backend/airport-search/${name}`)
    const airport = await res.json()
    //console.log(airline.data)
    return airport.data
  }