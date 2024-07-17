import React from 'react'

const HeadingText = ({title, description}: {title: String, description: String}) => {
  return (
    <div className='flex flex-col'>
        <h1 className='md:text-3xl text-2xl font-medium title-font text-gray-900 mb-1'>{title}</h1>
        <p className='text-base leading-relaxed text-purple-500'>{description}</p>
    </div>
  )
}

export default HeadingText