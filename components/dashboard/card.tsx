import { CardProps } from '@/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({title,amount, icon, icon_variant, variant}: CardProps) {
  return (
    <div className={`grid grid-flow-row-dense grid-cols-3 py-4 px-5 rounded-lg items-center w-full h-36 ${variant}`}>
      <div className='col-span-2'>
        <h3 className='font-bold text-gray-400 py-1'>{title}</h3>
        <p className='font-bold text-xl'>₡{amount}</p>
      </div>
      <div className={`text-3xl text-end ${icon_variant}`}>
      <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  )
}
