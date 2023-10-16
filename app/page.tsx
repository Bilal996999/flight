import AirlineTable from '@/components/AirlineTable'
import HeroForm from '@/components/HeroFrom'
import AboutUs from '@/components/AboutUs'
import Airports from '@/components/Airports'
import Image from 'next/image'
import Faq from '@/components/Faq'

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <AirlineTable/>
      <Airports/>
      <Faq/>
      <AboutUs />
    </main>
  )
}
