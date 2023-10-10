import Link from 'next/link'
import React from 'react'
import {IoAirplaneSharp} from "react-icons/io5"

import SingleFlightFetch from '@/fetch/SingleFlightFetch'

const FlightID = async({ params }) => {

  const flightDetails = await SingleFlightFetch(params.id)
  //console.log(flightDetails)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-10">
      <div className='container'>
        <div className='flex justify-start items-center space-x-2 w-full'>
          <Link href='/' className='text-blue-500 no-underline text-sm'>Flight Status</Link>
          <p className='mb-0'>{' >'}</p>
          <Link href='/airline/american-airlines' className='text-blue-500 no-underline text-sm'>{flightDetails?.airline.name.split(" ")[0]}</Link>
          <p className='mb-0'>{' >'}</p>
          <p className=' no-underline text-sm text-gray-500 mb-0'>{flightDetails?.flight.iata}</p>
        </div>
        <div className='py-3 mb-7'>
          <h1 className='text-[20px] font-bold text-[#0078D2]'>{flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} Flight Status Today</h1>
          <h5 className='text-sm font-bold text-[#3c3c3d]'>
          {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} from {flightDetails?.departure.timezone.split('/')[1]} to {flightDetails?.arrival.timezone.split('/')[1]}, {flightDetails?.departure.timezone.split('/')[0]}   </h5>
          <p className='text-sm text-gray-600'>International flight <strong>{flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} </strong> from <b>{flightDetails?.departure.timezone.split('/')[1]}</b> ({flightDetails?.departure.iata}) {flightDetails?.departure.timezone.split('/')[0]} to <b>{flightDetails?.arrival.timezone.split('/')[1]}</b>  ({flightDetails?.arrival.iata}) Canada operated by United Airlines. Scheduled time of departure from Denver International Airport is 19:03 05 October 2023 America/Denver and scheduled time of arrival in Calgary International Airport is 21:35 05 October 2023 America/Edmonton. The duration of the flight is 2 hours 41 minutes.</p>
        </div>
        <p>Current Local Time in {flightDetails?.departure.airport} Airport Thursday, <strong>October 05, 2023 22:40</strong></p>


        <div className='rounded-sm bg-[#EBEFF0]'>
          <div className='rounded-sm flex justify-between items-center border-[1px] border-[#EBEFF0]'>
            <div className='rounded-smspace-y-1 py-2 px-3 w-[30%]'>
              <h2 className='text-[24px] font-bold text-[#484848] mb-0'>{flightDetails?.flight.iata} - {flightDetails?.flight.icao}</h2>
              <p className='text-sm mb-0'>{flightDetails?.departure.airport.split(" ")[0]} Airlines ({flightDetails?.airline.iata})</p>
            </div>
            <div className='flex justify-center items-center rounded-sm space-y-1 py-2 px-3 w-[40%] text-center'>
              <div className='w-[40%]'>
                <h2 className='text-[20px] font-bold text-[#484848] mb-1'>IAH</h2>
                <p className='text-sm mb-0'>Houston United States</p>
              </div>
              <div className='w-[20%] text-center'>
                <IoAirplaneSharp className='text-center mx-auto text-[30px]'/>
              </div>
              <div className='w-[40%]'>
                <h2 className='text-[20px] font-bold text-[#484848] mb-1'>ORF</h2>
                <p className='text-sm mb-0'>Norfolk United States</p>
              </div>
            </div>
            <div className='rounded-sm space-y-1 py-2 bg-[#006100] text-right px-3 w-[30%]'>
              <h2 className='text-[24px] font-bold text-white mb-0'>Scheduled On time</h2>
              <p className='text-sm mb-0 text-white'>Estimated Depart in 12 hours, 48 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightID