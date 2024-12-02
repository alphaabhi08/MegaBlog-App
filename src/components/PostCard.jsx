import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import { truncate } from 'lodash'

function PostCard({ $id, title, featuredImage }) {
  // Truncate the title to a specific length, e.g., 50 characters
  const truncatedTitle = truncate(title, { length: 50 })

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-xl w-full h-48 object-cover' // Adjust h-48 to your preferred height
          />
        </div>
        <h2 className='text-xl font-bold'>{truncatedTitle}</h2>
      </div>
    </Link>
  )
}

export default PostCard
