import React from 'react'
import AirlineNameFetch from '@/fetch/AirlineNameFetch'
import AirportNameFetch from '@/fetch/AirportNameFetch'
import FlightForm from '@/components/FlightForm'
import Link from 'next/link'

const page = async ({ params }) => {

    const searchAirLineData = await AirlineNameFetch(params.id)
    const searchAirportData = await AirportNameFetch(params.id)
    //console.log(searchAirLineData)
    //console.log(searchAirportData)

    return (
        <div className="flex flex-col items-center justify-between pb-28">
            <section className='p-[80px] w-full bg-[url(https://cdn.flight-status.info/images/banner.webp)] bg-cover'>
                <div className='container mx-auto'>
                    <h1 className='text-black text-[32px]'>
                        Search Result with "america"
                    </h1>
                    <div className='bg-white w-100 shadow-sm px-5 py-10 mt-4'>
                        <div className='flex space-x-5 items-center'>
                            <p className='text-[14px] mb-0'>Search by:</p>
                            <span className='block cursor-pointer text-[14px] rounded-full bg-[#0078D2] p-2 text-white'>Flight number</span>
                        </div>
                        <FlightForm />
                    </div>
                </div>
            </section>

            <div className='container mx-auto pt-20'>
                <h2 className='text-left w-100 mb-10 text-[#0078d2] text-[24px]'>
                    List of airlines with search "{params.id}"
                </h2>

                <div className='relative overflow-x-auto w-100 mx-auto text-sm'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="px-6 py-3">Airline</th>
                                <th scope="col" className="px-6 py-3 text-right pr-[200px]">Iata</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchAirLineData?.data?.map((i) => (
                                    <tr key={i.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airline_slug}`}>{i.airline_name}</Link></td>
                                        <td className='px-6 py-4 font-bold text-gray-800 text-right pr-[200px]'>{i.airline_iata_code}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            <div className='container mx-auto pt-20'>
                <h2 className='text-left w-100 mb-10 text-[#0078d2] text-[24px]'>
                    List of airports with search "{params.id}"
                </h2>

                <div className='relative overflow-x-auto w-100 mx-auto text-sm'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Iata</th>
                                <th scope="col" className="px-6 py-3">City</th>
                                <th scope="col" className="px-6 py-3">Country</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchAirportData?.data?.map((i) => (
                                    <tr key={i.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        <td className='px-6 py-4 font-bold text-[#0078d2] w-[40%]'><Link className='no-underline' href={`/airline/${i.airport_id}`}>{i.airport_name}</Link></td>
                                        <td className='px-6 py-4  text-gray-800'>{i.icao_code}</td>
                                        <td className='px-6 py-4  text-gray-800'>{i.timezone.split('/')[1]}</td>
                                        <td className='px-6 py-4  text-gray-800'>{i.country_name}</td>
                                        <td className='px-6 py-4  text-gray-800'>{i.timezone}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default page