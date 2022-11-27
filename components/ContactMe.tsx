import React from 'react'
import { CalendarDaysIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { getPageStaticInfo } from 'next/dist/build/analysis/get-page-static-info'

type Props = {}

function ContactMe({}: Props) {

  return (
    <div className='h-fit min-h-screen flex relative flex-col text-center md:flex-row 
    px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className='text-2xl font-semibold text-center break-normal'>
                Here's how to reach me.
                </h4>

                <div className="space-y-10 -ml-15px">
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl"><a href="mailto:contact@kyronne.com">contact@kyronne.com</a></p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl"> London </p>
                    </div>
                        <div className='flex items-center space-x-5 justify-center'>
                        <CalendarDaysIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl"><a href="https://calendly.com/kyronne">Book a meeting</a></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactMe