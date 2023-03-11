import React from 'react'

interface Props {
  text: string
  description?: string
}

export const Heading: React.FC<Props> = ({ text, description }) => {
  return (
    <div className='mb-7'>
      <h1 className='text-3xl text-gray-100 pl-5 font-bold uppercase relative before:bg-gray-700 before:w-[10px] before:absolute before:top-0 before:left-0 before:h-[40px]'>
        {text}
      </h1>
      <h2 className='mt-4 font-semibold text-gray-100'>{description}</h2>
    </div>
  )
}
