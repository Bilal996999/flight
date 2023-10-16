"use client"
import {useState, useEffect} from 'react'
import HeroFrom from '@/components/HeroFrom'
import HeroContentFetch from '../fetch/HeroContentFetch'

const HeroContent = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        myFetch()
    },[])
    const myFetch = async()=>{
        const heroData = await HeroContentFetch()
        setData(heroData)
        console.log(heroData)
    }

    return (
        <section className='p-[80px] w-full bg-[url(https://cdn.flight-status.info/images/banner.webp)] bg-cover'>
            <div className='container mx-auto'>
                <h1 className='text-black text-[32px]'>
                    {data?.data?.title}
                </h1>
                <p className='text-black text-[14px] mt-6'>
                    {data?.data?.description}
                </p>
                <div className='bg-white w-100 shadow-sm px-5 py-10 mt-4'>
                    <div className='flex space-x-5 items-center'>
                        <p className='text-[14px] mb-0'>Search by:</p>
                        <span className='block cursor-pointer text-[14px] rounded-full bg-[#0078D2] p-2 text-white'>Airlines and airports status</span>
                    </div>
                    <HeroFrom />
                </div>
            </div>
        </section>
    )
}

export default HeroContent