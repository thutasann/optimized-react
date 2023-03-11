import React from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  value: any
  onChange: any
  type: 'number' | 'text'
  label?: string
  maxLength?: number
  placholder?: string
  isSerach?: boolean
}

const Input: React.FC<Props> = ({ value, onChange, type, label, maxLength, placholder, isSerach }) => {
  return (
    <div className='flex flex-col gap-2 relative group'>
      <label className='text-md font-semibold'>{label}</label>
      <input
        className='text-slate-900 rounded-md focus:outline-none focus:ring-0 focus:border-none bg-gray-100'
        value={value}
        onChange={onChange}
        type={type}
        maxLength={maxLength}
        placeholder={placholder}
      />
      {isSerach && <BsSearch className='  absolute top-2 text-gray-500 right-3 h-[40px] w-[20px]' />}
    </div>
  )
}

export default Input
