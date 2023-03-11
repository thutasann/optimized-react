import React from 'react'

interface Props {
  text: string
  onClick?: () => void
  isDanger?: boolean
}

const Button: React.FC<Props> = ({ text, onClick, isDanger }) => {
  return (
    <div className={`button ${isDanger && 'bg-red-500'}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
