import React from 'react'
import {PostProps} from '../types/types'
const PostCard = ({title,desc}: PostProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default PostCard;
