"use client"
import { createContext, useContext, useState } from 'react'
import AirlineNameFetch from '@/fetch/AirlineNameFetch';

const airlineNameContext = createContext();

const HeroFrom = () => {
    const [name, setName] = useState()

    const onSubmitMy = (e) => {
        e.preventDefault()
    }

    const handleChange = async(e) => {
        setName(e.target.value)
        const res = await AirlineNameFetch(name)
        //console.log(res)
    }
    return (
        <form className='mt-5' onSubmit={onSubmitMy}>
            <label className='text-[14px] w-100'>Name*</label>
            <input onChange={handleChange} className='mt-2 border w-[300px] h-[40px] text-[14px] indent-5' type='text' placeholder='Enter Name to Search' />
            <button className='block mt-3 text-white bg-[#0078D2] py-2 px-10 ms-auto'>Search</button>
        </form>
    )
}

export default HeroFrom