import { CardProps } from '@/types'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ title, amount, icon, icon_variant, arrow, arrow_variant }: CardProps) {
  return (
    <div className={`bg-white shadow-md flex flex-col px-5 py-4 rounded-sm w-full h-36 gap-2`}>
      <div className={`text-2xl py-2 w-12 h-12 text-center shadow-md border border-zinc-200 rounded-full ${icon_variant}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='flex flex-row'>
        <div className='flex-1 flex flex-col'>
          <p className='font-bold text-2xl py-0.5'>₡{amount}</p>
          <h3 className='font-semibold text-gray-400 text-sm'>{title}</h3>
        </div>
        <div className={`flex items-end ${arrow_variant}`}>
          <span>5%</span>
          <span><FontAwesomeIcon icon={faArrowUp}/></span>
          
        </div>
      </div>
    </div>
  )
}
