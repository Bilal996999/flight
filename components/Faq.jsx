const Faq = () => {

    return (
        <section className='w-full'>
            <div className='container mx-auto mt-20'>
                <h2 className='text-[#0078d2] text-[28px] mb-6'>Frequently asked questions, answered</h2>
                <dl className="mt-2 divide-y divide-slate-100">
                    <details className="group py-4 marker:content-['']">
                        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                            How can I check flight status?
                            <svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12H6"></path>
                                <path className="group-open:hidden" d="M12 6v12"></path>
                            </svg>
                        </summary>
                        <div className="pb-6 pt-6">
                            <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                                <p>
                                    You can follow the below steps to check your flight status after you make a booking:</p>
                                    <ul className='list-disc'>
                                        <li>Visit flight-status.info select your airlines</li>
                                        <li>With each Airlines you check Flight Status</li>
                                        <li>Enter the flight number or departing and arriving destination.</li>
                                        <li>Enter your date of travel</li>
                                        <li>Get detail information of your flight</li>
                                    </ul>
                            </div>
                        </div>
                    </details>
                </dl>
            </div>
        </section>

    )
}

export default Faq