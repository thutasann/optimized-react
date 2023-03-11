import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import Button from '../common/button'
import FlexBox from '../common/flex-box'
import { Heading } from '../common/heading'

type Color = 'red' | 'blue'

const Swatch: React.FC<{ color: string }> = ({ color }) => {
  console.log(`swatch rendered ${color}`)
  return <div className={` mt-3 rounded-md w-[75px] h-[75px] bg-${color}-700`}></div>
}

const MemoedSwatch = memo(Swatch)

const ReactMemo: React.FC = () => {
  const [color, setColor] = useState<Color>('blue')
  const [appRenderIndex, setAppRenderIndex] = useState(0)

  return (
    <div>
      <Heading text='React Memo' description='In this section, React Memo will be applied to optimize the Re-rendering.' />
      <FlexBox>
        <Button text='Re-Render App' onClick={() => setAppRenderIndex(appRenderIndex + 1)} />
        <Button text='Change Color' onClick={() => setColor(color === 'blue' ? 'red' : 'blue')} />
      </FlexBox>
      <p className='my-3'>App Render - {appRenderIndex}</p>
      <FlexBox>
        <MemoedSwatch color={color} />
        <MemoedSwatch color={color === 'red' ? 'blue' : 'red'} />
      </FlexBox>
    </div>
  )
}

export default ReactMemo
