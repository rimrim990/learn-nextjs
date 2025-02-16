import Client from '@/components/client'
import Server from '@/components/server'

interface Params {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: Params) {
  const names = (await searchParams).names
  const username = Array.isArray(names) ? names[0] : names
  return (
    <div>
      <h1>Hello! {username}</h1>
      <p>Server Component Page</p>
      <Client />
      <Server />
    </div>
  )
}
