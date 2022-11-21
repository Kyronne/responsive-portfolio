import React from 'react'
import { CalendarDaysIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { getPageStaticInfo } from 'next/dist/build/analysis/get-page-static-info'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {}

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = formData => 
    {window.location.href = 'mailto:contact@kyronne.com?subject=${formData.subject}&body=Hi, my name is ${formData.message}. ${formData.message} (${formData.email})';
}
  return (
    <div className='h-screen flex relative flex-col text-center md:flex-row 
    md:max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className='text-2xl font-semibold text-center break-normal'>
                Here's how to reach me.
                </h4>

                <div className="space-y-10">
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl">contact@kyronne.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl"> London </p>
                    </div>
                        <div className='flex items-center space-x-5 justify-center'>
                        <CalendarDaysIcon className="text-[#D7D1D1] h-7 w-7 animate-pulse"/>
                        <p className="text-1xl">https://calendly.com/kyronne</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit'>
                    <div className='flex space-x-2'>
                        <input {...register('name')}placeholder="Name" className='contactInput'  type="text" />
                        <input {...register('email')}placeholder="Name" className='contactInput' type="text" />
                    </div>

                    <input {...register('subject')}placeholder="Subject" className='contactInput' type="text" />
                    <textarea {...register('message')}placeholder="Message"className='contactInput' />
                    <button type="submit" className="bg-[#D7D1D1] py-5 px-10 rounded-md text-black font-bold">Submit</button>
                </form>
            </div>
        </div>
  )
}

export default ContactMe