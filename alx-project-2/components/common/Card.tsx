import { CardProps } from '@/interfaces'
import React from 'react'

const Card:React.FC<CardProps> = ({title,content}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}Maskoff</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default Card