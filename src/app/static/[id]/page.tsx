import { requestAll, requestById } from '@/util/request'

export const revalidate = 10
export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await requestAll({})
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

type Params = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Params) {
  const id = (await params).id
  const post = await requestById({ id: Number(id) })
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
