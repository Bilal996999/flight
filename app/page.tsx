import AirlineTable from '@/components/AirlineTable'
import HeroForm from '@/components/HeroFrom'
import AboutUs from '@/components/AboutUs'
import Airports from '@/components/Airports'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <AirlineTable/>
      <Airports/>
      <AboutUs />
    </main>
  )
}
