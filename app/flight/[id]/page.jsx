import Link from 'next/link'
import React from 'react'
import { IoAirplaneSharp } from "react-icons/io5"

import SingleFlightFetch from '@/fetch/SingleFlightFetch'

const FlightID = async ({ params }) => {

  const flightDetails = await SingleFlightFetch(params.id)
  console.log(flightDetails)

  return (
    <div className="flex flex-col items-center justify-between py-10">
      <div className='container mx-auto'>
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
                <IoAirplaneSharp className='text-center mx-auto text-[30px]' />
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
          <div className='flex justify-center items-center'>
            <div className="flex-1 justify-self-start bg-white text-center py-10 border-2 border-[#EBEFF0]">
              <span className='rounded-md py-2 px-10 bg-[#0569A8] text-white font-bold text-[13px]'>
                Departure
              </span>
              <h3 className='text-[18px] text-[#484848] font-bold mt-3'>
                {flightDetails?.departure.airport}
              </h3>
              <div className='flex justify-center items-center space-x-2 text-[13px] font-bold text-[#484848]'>
                <p className='mb-0'>IATA: <span className='text-[#0078D2]'>{flightDetails?.departure.iata}</span></p>
                <span className='h-1 w-1 rounded-full bg-[#0078D2]'></span>
                <p className='mb-0'>ICAO: {flightDetails?.departure.icao}</p>
              </div>
            </div>
            <div className="flex-1 justify-self-start bg-white text-center py-10 border-2 border-[#EBEFF0]">
              <span className='rounded-md py-2 px-10 bg-[#0569A8] text-white font-bold text-[13px]'>
                Arrival
              </span>
              <h3 className='text-[18px] text-[#484848] font-bold mt-3'>
                {flightDetails?.arrival.airport}
              </h3>
              <div className='flex justify-center items-center space-x-2 text-[13px] font-bold text-[#484848]'>
                <p className='mb-0'>IATA: <span className='text-[#0078D2]'>{flightDetails?.arrival.iata}</span></p>
                <span className='h-1 w-1 rounded-full bg-[#0078D2]'></span>
                <p className='mb-0'>ICAO: {flightDetails?.arrival.icao}</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='w-full'>
            <div className='container mx-auto mt-20'>
                <h2 className='text-[#0078d2] text-[28px] mb-6'>Frequently asked questions, answered</h2>
                <dl className="mt-2 divide-y divide-slate-100">
                    <details className="group py-4 marker:content-['']">
                        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                            How long is the flight from {flightDetails?.departure.timezone.split('/')[1]} to {flightDetails?.arrival.timezone.split('/')[1]} ?
                            <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12H6"></path>
                                <path className="group-open:hidden" d="M12 6v12"></path>
                            </svg>
                        </summary>
                        <div className="pb-6 pt-6">
                            <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                                <p>
                                On average, nonstop flight takes <b>5 hour(s) 33 minutes</b>, with the flight distance of <b>4201 km (2610 miles).</b>
                                </p>
                            </div>
                        </div>
                    </details>
                </dl>
                <dl className="mt-2 divide-y divide-slate-100">
                    <details className="group py-4 marker:content-['']">
                        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                          What type of aircraft is used for the {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} flight?
                            <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12H6"></path>
                                <path className="group-open:hidden" d="M12 6v12"></path>
                            </svg>
                        </summary>
                        <div className="pb-6 pt-6">
                            <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                                <p>
                                All <b>{flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number}</b>
                                 flights are operated using <b>Boeing 757-200 (winglets) Passenger</b> aircraft.
                                </p>
                            </div>
                        </div>
                    </details>
                </dl>
                <dl className="mt-2 divide-y divide-slate-100">
                    <details className="group py-4 marker:content-['']">
                        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                          Which terminal the flight {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} is arriving at?
                            <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12H6"></path>
                                <path className="group-open:hidden" d="M12 6v12"></path>
                            </svg>
                        </summary>
                        <div className="pb-6 pt-6">
                            <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                                <p>
                                Flight  {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} arrives in {flightDetails?.arrival.airport} Airport at 
                                 <b> Terminal {flightDetails?.arrival.terminal || "Unknown"}.</b>
                                </p>
                            </div>
                        </div>
                    </details>
                </dl>
                <dl className="mt-2 divide-y divide-slate-100">
                    <details className="group py-4 marker:content-['']">
                        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                        How many {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} flights are operated a week?
                            <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12H6"></path>
                                <path className="group-open:hidden" d="M12 6v12"></path>
                            </svg>
                        </summary>
                        <div className="pb-6 pt-6">
                            <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                                <p>
                                  <b>6 flights</b> per week. The Flight {flightDetails?.airline.name.split(" ")[0]} {flightDetails?.airline.iata} {flightDetails?.flight.number} is operated on Monday, Wednesday, Thursday, Friday, Saturday, Sunday.
                                </p>
                            </div>
                        </div>
                    </details>
                </dl>
            </div>
        </section>
    </div>
  )
}

export default FlightID