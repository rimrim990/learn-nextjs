import { requestAll } from '@/util/request'

const posts = await requestAll({})

async function getStatus() {
  const res = await fetch('http://localhost:3000/api')
  if (!res.ok) throw new Error('request failed.')
  return res.json()
}

export default async function PostsPage() {
  const { status } = await getStatus()
  return (
    <main>
      <h1>Post archive</h1>
      <h3>Status: {status}</h3>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </main>
  )
}
