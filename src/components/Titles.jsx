import React from 'react'

export default function Titles({children, id}) {
  return (
    <h1 id={id && id} className='text-3xl font-bold mb-5 text-cyan-500 dark:text-cyan-600'>
        {children}
    </h1>
  )
}
