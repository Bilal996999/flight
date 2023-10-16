export default async function FlightAgainstAirline(slug) {

    const res = await fetch(`https://rdpmarketplace.com/backend/airline-flight/${slug}`)
    const airline = await res.json()
    //console.log(airline.data)
    return airline.data
  }