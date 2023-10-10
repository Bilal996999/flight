
import AirlineTable from '@/components/AirlineTable'
import AboutUs from '@/components/AboutUs'
import HeroFrom from '@/components/HeroFrom'
import AirlineFlight from '@/fetch/AirlineFlight'
import FlightData from '@/constants/flight-data'
import Link from 'next/link'


const AirlineID = async ({ params }) => {

  const airlineFlights = await AirlineFlight(params.id)

  console.log(airlineFlights)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <section className='w-100 p-[80px] bg-[url(https://cdn.flight-status.info/images/banner.webp)]'>
        <div className='container'>
          <h1 className='text-white text-[32px]'>
            {airlineFlights[0]?.airline?.name} Flight Status
          </h1>
          <p className='text-black text-[14px] mt-6'>
            United Airlines is a major American airline headquartered at Willis Tower in Chicago, Illinois. United gives you the opportunity to choose from 4,500 daily flights to more than 300 cities across five continents. They serves an extensive network in the U.S., with more than 200 domestic destinations. We provide the best method to check United Airlines Flight Status today at here by input flight number or departure and arrivals airport to get real time flight status tracking including info about arrivals, delays, cancellations . You also check the united status by toll free phone number +1 800 864 8331
          </p>
          <div className='bg-white w-100 shadow-sm px-5 py-10 mt-4'>
            <div className='flex space-x-5 items-center'>
              <p className='text-[14px] mb-0'>Check Status:</p>
              <span className='block cursor-pointer text-[14px] rounded-full bg-[#0078D2] p-2 text-white'>Airlines and airports status</span>
            </div>
            <HeroFrom />
          </div>
        </div>
      </section>

      <div className='container pt-20'>
        <h2 className='text-left w-100 mb-10 text-[#0078d2] text-[24px]'>List Airlines for checking Flight Status</h2>

        <div className='relative overflow-x-auto w-100 mx-auto'>

          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-[40px]'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className="px-6 py-3">No.</th>
                <th scope="col" className="px-6 py-3">Departure</th>
                <th scope="col" className="px-6 py-3">Arrival</th>
                <th scope="col" className="px-6 py-3">Origin</th>
                <th scope="col" className="px-6 py-3 ps-14">Destination</th>
                <th scope="col" className="px-6 py-3">Terminal</th>
                <th scope="col" className="px-6 py-3">Live Status</th>
              </tr>
            </thead>
            <tbody>
              {
                airlineFlights?.slice(0,20).map((i) => (
                  <tr key={i.No} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='px-6 py-4 font-bold text-[#0078d2]'><Link className='no-underline' href={`/flight/${i.flight.iata}`}>{i.flight.iata}</Link></td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.departure.scheduled.slice(11, 16)}</td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.arrival.scheduled.slice(11, 16)}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>({i.departure.iata}) {i.departure.airport} </td>
                    <td className='px-6 py-4 font-regular text-gray-800 ps-14'>({i.arrival.iata}) {i.arrival.airport}</td>
                    <td className='px-6 py-4 font-regular text-gray-800 w-[250px]'>Dep {i.departure.terminal || "none"} - Arr {i.arrival.terminal || "none"}</td>
                    <td className='px-6 py-4 font-regular text-white bg-[#006100] w-[200px] capitalize'>{i.flight_status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='container py-10'>
            <h2 className='text-[#0078d2] text-[28px] mb-6'>United Airlines</h2>
            <p className='text-black text-[12px]'>
              The third-largest airline in the world is one of the major American Airlines to date. United Airlines, Inc. which is commonly called just United, is headquartered in Willis Tower in Chicago, Illinois, and has eight hubs around the world. United operates largely on domestic and international route networks in major cities and small towns across the United States and to all six continents.
            </p>
      </div>
      <div className='container mb-10'>
            <h2 className='text-[#0078d2] text-[28px] mb-6'>United Airlines Destination Domestic, International</h2>
            <p className='text-black text-[12px]'>
            United Airlines headquarters for the air carrier&apos;s parent company, United Continental Holdings, are in Chicago, serving North America, Asia, Latin America, the Caribbean, and Europe. United operates flights to 238 domestic destinations and 118 international destinations in 48 countries or regions across five continents. In spring 2021, United will once again fly regularly to all 6 inhabited continents following the reinstatement of scheduled year-round flights to Africa
            </p>
      </div>
      <div className='container mb-10'>
            <h2 className='text-[#0078d2] text-[28px] mb-6'>Cancelation & Refund Policy</h2>
            <p className='text-black text-[12px]'>
            United Airlines value and understands circumstances causes travel plans cancelation unexpectedly. United&apos;s 24-hour flexible booking policy gives you the freedom to make changes to select reservations within 24 hours of booking and ticketing, without being charged change fees if you made your purchase one week or more before the flight was scheduled to depart. This includes canceling your reservation and requesting a full refund of the ticket price.
            </p>
            <p className='text-black text-[12px]'>
            Although Basic Economy reservations aren&apos;t eligible for changes within 24 hours, they&apos;re still eligible for a full refund if you cancel within 24 hours and you made your purchase one week or more before the flight was scheduled to depart
            </p>
      </div>
    </div>
  )
}

export default AirlineID