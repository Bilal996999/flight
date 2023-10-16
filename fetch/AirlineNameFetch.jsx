export default async function AirlineNameFetch(name) {

    const res = await fetch(`https://rdpmarketplace.com/backend/airline/${name}`)
    const airline = await res.json()
    //console.log(airline.data)
    return airline.data
  }