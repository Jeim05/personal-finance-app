import { CardProps } from '@/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ title, amount, icon, icon_variant, variant }: CardProps) {
  return (
    <div className={`flex flex-row px-5 rounded-lg items-center w-full h-36 ${variant}`}>
      <div className='basis-3/4 flex flex-col gap-4 content-start'>
        <h3 className='font-semibold text-gray-400 py-1 -mt-3 text-sm'>{title}</h3>
        <p className='font-bold text-2xl'>₡{amount}</p>
      </div>
      <div className={`basis-1/4 text-4xl text-end ${icon_variant}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  )
}
