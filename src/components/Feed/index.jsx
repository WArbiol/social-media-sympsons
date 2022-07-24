import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../Post'

async function fetchPosts() {
  let res = await fetch('http://localhost:3000/posts.json')
  let data = res.json()
  return data
}

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data['posts'])
    })
  })

  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          title={post.title}
          date={post.date}
          src={post.src}
          description={post.description}
        />
      ))}
    </Box>
  )
}

export default Feed
