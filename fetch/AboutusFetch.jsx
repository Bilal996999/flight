import axios from 'axios'

export default async function AboutusFetch() {

  const res = await fetch('https://rdpmarketplace.com/backend/about-us')
  const aboutus = await res.json()
  //console.log(airlines.data)
  return aboutus
}

