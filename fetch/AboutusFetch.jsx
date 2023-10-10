import axios from 'axios'

export default async function AboutusFetch() {

  const aboutus = await axios.get('https://rdpmarketplace.com/backend/about-us')
  //console.log(airlines.data)
  return aboutus.data
}

