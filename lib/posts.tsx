import fetch from "node-fetch"

export const getAllPostsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  )
  const posts: any = await res.json()
  const filteredPosts = posts.sort(
    (a: any, b: any) => b.created_at - a.created_at
  )
  return filteredPosts
}

export const getAllPostsIds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  )
  const posts: any = await res.json()
    return posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      }
    })
}

export const getPostData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`
  )
  const post: any = await res.json()
    return {
      post,
    }
}