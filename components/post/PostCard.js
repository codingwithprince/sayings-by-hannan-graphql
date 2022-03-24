import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <h2 style={{color: 'black'}}>{post.title}</h2>
      <p>{post.content.text}</p>
      <img src={post.featuredimage.url} alt={post.title} />
    </div>
  )
}

export default PostCard;