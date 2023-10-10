"use client"
import AirlineFetch from '@/fetch/AirlineFetch';
import AirlineFlight from '@/fetch/AirlineFlight';
import AirlineNameFetch from '@/fetch/AirlineNameFetch';
import Image from 'next/image';
import HeroFrom from './HeroFrom';
import Link from 'next/link';


const AirlineTable = async () => {

  const data = await AirlineFetch()
  // const airlineFlights = await AirlineFlight(params)
  const baseURL = "https://rdpmarketplace.com/backend/"
  const imageLoader = ({ src, width, quality }) => {
    return `https://rdpmarketplace.com/backend/${src}`
  }

  return (
    <>
      <section className='w-100 p-[80px] bg-[url(https://cdn.flight-status.info/images/banner.webp)]'>
        <div className='container'>
          <h1 className='text-black text-[32px]'>
            Flight status tracker - Check the current status of your flight
          </h1>
          <p className='text-black text-[14px] mt-6'>Check flight status of more than 500 airlines all in one place. We bring you the best platform to check Flight status.
            The tracker helps you in collecting the most information about your flights. With the real-time GPS tracking, we make you aware of all information related to a flight such as live flight status, arrival and departure, delay or cancel time of the flights.</p>
          <div className='bg-white w-100 shadow-sm px-5 py-10 mt-4'>
            <div className='flex space-x-5 items-center'>
              <p className='text-[14px] mb-0'>Search by:</p>
              <span className='block cursor-pointer text-[14px] rounded-full bg-[#0078D2] p-2 text-white'>Airlines and airports status</span>
            </div>
            <HeroFrom />
          </div>
        </div>
      </section>

      <div className='container pt-20'>
        <h2 className='text-left w-100 mb-10 text-[#0078d2] text-[24px]'>List Airlines for checking Flight Status</h2>

        <div className='relative overflow-x-auto w-100 mx-auto'>

          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">Airline</th>
                <th scope="col" className="px-6 py-3">Iata</th>
                <th scope="col" className="px-6 py-3">ICao</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {
                data?.data?.slice(0, 32).map((i) => (
                  <tr key={i.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>

                    <td>
                      <Image
                        loader={imageLoader}
                        src={i.airline_logo != null ? `${i.airline_logo}` : 'uploads/admin/airline/flight-img.jpg'}
                        alt='flight image'
                        width={240}
                        height={80}
                        className='h-[80px]'
                        />
                    </td>
                    <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airline_slug}`}>{i.airline_name}</Link></td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.airline_iata_code}</td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.airline_icao_code}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.airline_date_founded} Flight Founds</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AirlineTable