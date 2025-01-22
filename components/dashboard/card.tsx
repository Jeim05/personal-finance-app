import { CardProps } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Subtitles } from '../Subtitles'

export default function Card({ title, amount, variant, icon, icon_variant }: CardProps) {
  return (
    <div className={`card ${variant}`}>
      <div className={`card-icon ${icon_variant}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='card-body'>
        <div className='flex-1 flex flex-col'>
          <p className='card-amount py-3'>₡{amount}</p>  
          <Subtitles text={title} />
        </div>
      </div>
    </div>
  )
}
