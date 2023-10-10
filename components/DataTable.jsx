import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const dataTable = ({data}) => {
  return (
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
                        src='/flight-img.jpg'
                        alt='flight image'
                        width={240}
                        height={80} />
                    </td>
                    <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airline_slug}`}>{i.airline_name}</Link></td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.airline_iata_code}</td>
                    <td className='px-6 py-4 font-bold text-gray-800'>{i.airline_icao_code}</td>
                    <td className='px-6 py-4 font-regular text-gray-800'>{i.airline_date_founded} Flight Founds</td>
                  </tr>
                ))}
            </tbody>
          </table>
  )
}

export default dataTable