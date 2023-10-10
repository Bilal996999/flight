import React from 'react'
import AboutusFetch from '@/fetch/AboutusFetch'

const AboutUs = async() => {
    const aboutusData = await AboutusFetch()
    
    console.log(aboutusData)

    return (
        <div className='container py-[100px]'>
            <h2 className='text-[#0078d2] text-[28px] mb-6' dangerouslySetInnerHTML={{ __html: aboutusData.data.title }}></h2>
            <div className='text-black text-[12px]' dangerouslySetInnerHTML={{ __html: aboutusData.data.description }}>
            </div>
            {/* <p className='text-black text-[12px]'>
                How is a perfect trip look like in opinion of a traveler? -The simple answer is that the trip has to be well-prepared with important things well-arranged: we know where to visit, what to do, what to eat/drink etc. Almost experience travelers cannot deny that the very first step is to have flights with suitable schedule matching with activity plans during the trip. Imagine when you have all activities planned and accommodation booked but the flights leave/arrive too early/too late; you may need to cut off a part of your trip, rush to the airport to catch the flight or waste your precious time without alternatives waiting for the delayed flight. It is so annoyed having no idea if flights are scheduled or changed while the Airline websites do not provide updated time of your flight especially when it comes close to travel date. If you are seeking for the most updated and detailed information of flights Flight-Status.info is one of the wisest choices.
            </p>
            <p className='text-black text-[12px]'>
                The website brings you a large view of more than 500 airlines with their schedules of real-time updates. With Flight Status you can easily find and even compare the features of any airline among. The schedules are not only updated for today, tomorrow flights but also yesterday ones which most of airlines websites cannot help. This is in order to widen the information helping different purposes of customers: plan/ reconfirm trip for near future or review for any further needs of past-date flights.
            </p>
            <p className='text-black text-[12px]'>
                With gentle and elegant display, our website concentrates to the simple and convenience of viewer/ searcher. There are not so many tabs showing on your screen because we understand it may complicate our search. With Our website surely you will find it really informative and effective when you seek for any related flights&apos; details. The website brings you comfort click by click: one click a whole bag of advantages. By just put a city name, an airline name or flight number either of them then see that tracking flight status seems never be so easy and exact that way with Flight Status. Otherwise, “airline list for checking flight status” stands right on homepage and is arranged logically. You will only need to click to the airline names to get the result of expected flight status. It takes just a second to get all necessary details: departure & arrival time local time, cities, airports, terminals, gates, aircraft, number of total seats, duration of the flight, etc. Especially, there will be instructions about compensation policy and any further supports from operation airlines if any in case of changes or cancellations. You can also see how often the flight is operated to have back-up options for travel plan. On the other hand, in case of direct assistance need from the Airlines, their direct contacts are provided at our website for your most convenience.
            </p>
            <p className='text-black text-[12px]'>
                No doubt to say it is definitely worth to have Flight-Status.info as the best friend and the most helpful assistance. Let&apos;s visit and track your flight status on with fully information of your trip!
            </p> */}
        </div>
    )
}

export default AboutUs