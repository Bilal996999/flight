export default async function HeroContentFetch(name) {

    const res = await fetch(`https://rdpmarketplace.com/backend/home-hero-content/`)
    const heroContent = await res.json()
    //console.log(airline.data)
    return heroContent
  }