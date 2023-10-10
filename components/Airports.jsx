import React from 'react'
import AirportFetch from '@/fetch/AirportsFetch'
import Link from 'next/link'

const Airports = async() => {

    const airports = await AirportFetch()
    console.log(airports.data.slice(0,10))
    const spt =(data)=>{
        console.log(data);
        const da = data.split('/');
        return da[1]
    }

  return (
    <div className='container pt-20'>
    <h3 className='text-[24px] text-[#337AB7]'>Last 10 Airports Flight Status</h3>
     <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className="px-6 py-3">No.</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">IATA</th>
                <th scope="col" className="px-6 py-3">City</th>
                <th scope="col" className="px-6 py-3">Country</th>
                <th scope="col" className="px-6 py-3">ICAO</th>
              </tr>
            </thead>
            <tbody>
              {
                airports?.data?.slice(0, 10).map((i) => (
                  <tr key={i.airport_id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='px-6 py-4 font-bold text-[#0078d2]'>{i.airport_id}</td>
                    <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airport_name}`}>{i.airport_name}</Link></td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.iata_code}</td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.timezone ? i.timezone.split('/')[1] : i.country_name}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.country_name || "N/A"}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.icao_code}</td>
                  </tr>
                ))}
            </tbody>
          </table>
    </div>
  )
}

export default Airports