import React from 'react'

interface Props {
  text: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div className='button' onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
