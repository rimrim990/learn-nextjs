import { Post } from '@/types'

const mockPosts: Post[] = Array.from({ length: 20 }).map((_, id) => ({
  id,
  author: 'rimrim',
  title: `Title-${id}`,
  content: `content-${id}`,
  createdAt: new Date(2025, 1, 12, 9, 4),
  updatedAt: new Date(),
}))

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

type RequestParams = {
  delayMs?: number
}

export async function requestById({ delayMs = 1000, id }: RequestParams & { id: number }) {
  await delay(delayMs)
  const post = mockPosts.filter((post) => post.id === id)[0]
  if (!post) throw new Error('Not Found')
  return post
}

export async function requestAll({ delayMs = 1000 }: RequestParams) {
  await delay(delayMs)
  return mockPosts
}
