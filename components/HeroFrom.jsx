"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';


const HeroFrom = () => {
    const router = useRouter()

    const [param, setParam] = useState()

    const onSubmitMy = (e) => {
        e.preventDefault()
        router.push(`/search/${param}`)
    }

    const handleChange = (e) => {
        if(e.target.value != '') setParam(e.target.value)
        console.log(param)
    }
    return (
        <form className='mt-5' onSubmit={onSubmitMy}>
            <label className='text-[14px] w-100'>Name*</label>
            <input onKeyUp={handleChange} className='mt-2 border w-[300px] h-[40px] text-[14px] indent-5' type='text' placeholder='Enter Name to Search' />
            <button className='block mt-3 text-white bg-[#0078D2] py-2 px-10 ms-auto'>Search</button>
        </form>
    )
}

export default HeroFrom