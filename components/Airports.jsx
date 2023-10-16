import React from 'react'
import AirlineFlight from '@/fetch/AirlineFlight'
import Link from 'next/link'

const Airports = async() => {

    const airports = await AirlineFlight()

  return (
    <div className='container pt-20'>
    <h3 className='text-[24px] text-[#337AB7]'>Last 10 Airports Flight Status</h3>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className="px-6 py-3 font-bold">No.</th>
                <th scope="col" className="px-6 py-3 font-bold">Name</th>
                <th scope="col" className="px-6 py-3 font-bold">IATA</th>
                <th scope="col" className="px-6 py-3 font-bold">City</th>
                <th scope="col" className="px-6 py-3 font-bold">Country</th>
                <th scope="col" className="px-6 py-3 font-bold">Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                airports?.map((i, index) => (
                  <tr key={i.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='px-6 py-4 text-gray-800 font-medium'>{index}</td>
                    <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airline}`}>{i.airline}</Link></td>
                    <td className='px-6 py-4 text-gray-800'>{i.iata}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.city}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.country || "N/A"}</td>
                    <td className='px-6 py-4 text-gray-800'>{i.time}</td>
                  </tr>
                ))}
            </tbody>
      </table>
    </div>
  )
}

export default Airports