'use client'

import { useState } from 'react'

interface Props {
  serverTime: number
  clickAction: () => Promise<{ time: number }>
}

export default function Update({ serverTime, clickAction }: Props) {
  const [time, setTime] = useState<number>(serverTime)

  const handleClick = async () => {
    const { time } = await clickAction()
    setTime(time)
  }

  return (
    <div>
      <h4>child component of &#39;server&#39;</h4>
      <p>Server Passed time: {time}</p>
      <button onClick={handleClick}>Refresh Server!</button>
    </div>
  )
}
