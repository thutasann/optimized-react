import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isCol?: boolean
  gap?: number
}

const FlexBox: React.FC<Props> = ({ children, isCol, gap }) => {
  return (
    <div className={`flex ${gap ? `gap-${gap}` : 'gap-3'} ${isCol ? 'flex-col items-start justify-start' : 'flex-row items-center'}`}>
      {children}
    </div>
  )
}

export default FlexBox
