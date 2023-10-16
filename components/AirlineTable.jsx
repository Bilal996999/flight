"use client"
import AirlineFetch from '@/fetch/AirlineFetch';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState   } from 'react';
import HeroContent from '@/components/HeroContent'


const AirlineTable = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)

  useEffect(()=>{
    myFetch()
  },[page])

  const myFetch = async() =>{
    const airline = await AirlineFetch(page)
    setData(airline)
    //console.log(data)
  }
  // const airlineFlights = await AirlineFlight(params)
  const imageLoader = ({ src, width, quality }) => {
    return `https://rdpmarketplace.com/backend/${src}`
  }

  return (
    <>
      <HeroContent/>

      <div className='container mx-auto pt-20'>
        <h2 className='text-left w-100 mb-10 text-[#0078d2] text-[24px]'>List Airlines for checking Flight Status</h2>

        <div className='relative overflow-x-auto w-100 mx-auto text-sm'>
        <div className='flex items-center justify-start space-x-3 mb-4 w-[30%]'>
            <div className='bg-[#0078d2] py-1 px-3 text-white cursor-pointer' onClick={()=> setPage((prev)=>(
              prev - 1
              ))}>
              <p>{'<<'}</p>
            </div>
            <div className='bg-[#0078d2] py-1 px-3 text-white cursor-pointer' onClick={()=> setPage(1)}>
              <p>1</p>
            </div>
            <div className='bg-[#0078d2] py-1 px-3 text-white cursor-pointer' onClick={()=> setPage(2)}>
              <p>2</p>
            </div>
            <div className='bg-[#0078d2] py-1 px-3 text-white cursor-pointer' onClick={()=> setPage(3)}>
              <p>3</p>
            </div>
            <div className='bg-[#0078d2] py-1 px-3 text-white cursor-pointer' onClick={()=> setPage((prev)=>(
              prev + 1
              ))}>
              <p>{'>>'}</p>
            </div>
          </div>

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
                data?.data?.data?.map((i) => (
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