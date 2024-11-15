import { CardProps } from '@/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({title,amount, icon, icon_variant, variant}: CardProps) {
  return (
    <div className={`flex flex-row py-4 px-5 rounded-lg items-center w-full h-36 ${variant}`}>
      <div className='basis-3/4'>
        <h3 className='font-bold text-gray-400 py-1 mb-4'>{title}</h3>
        <p className='font-bold text-2xl'>₡{amount}</p>
      </div>
      <div className={`basis-1/4 text-4xl text-end ${icon_variant}`}>
      <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  )
}
