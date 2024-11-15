import { CardProps } from '@/types'
import React from 'react'

export default function Card({title, icon, icon_variante, variant}: CardProps) {
  return (
    <div className={``}>
      <div>
        <h3 className='font-bold text-gray-400'></h3>
      </div>
    </div>
  )
}
