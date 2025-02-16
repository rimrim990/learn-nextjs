import { delay } from '@/util/request'
import Update from '@/components/update'

async function requestSomething() {
  'use server'
  await delay(1000)
  return { status: 'OK', time: new Date().getTime() }
}

export default async function Server() {
  const { status, time } = await requestSomething()

  return (
    <div>
      <p>
        status: <strong>{status}</strong>
      </p>
      <p>
        time: <strong>{time}</strong>
      </p>
      <Update clickAction={requestSomething} serverTime={time} />
    </div>
  )
}
