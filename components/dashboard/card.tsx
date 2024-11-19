import { CardProps } from '@/types'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ title, amount, icon, icon_variant, arrow, arrow_variant }: CardProps) {
  return (
    <div className={`card`}>
      <div className={`card-icon ${icon_variant}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='card-body '>
        <div className='flex-1 flex flex-col'>
          <p className='card-amount py-0.5'>₡{amount}</p>
          <h3 className='subtitulo'>{title}</h3>
        </div>
        <div className={`flex items-end ${arrow_variant}`}>
          <span>5%</span>
          <span><FontAwesomeIcon icon={arrow}/></span>   
        </div>
      </div>
    </div>
  )
}
