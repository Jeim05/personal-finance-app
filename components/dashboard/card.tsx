import { CardProps } from '@/types'
import { Subtitles } from '../Subtitles'
import { CardIcon } from './CardIcon'

export default function Card({ title, amount, variant, icon, icon_variant, icon_position }: CardProps) {
  return (
    <div className={`card ${variant}`}>
      {icon_position == 'left' && (
        <CardIcon icon={icon} variant={icon_variant} />
      )}
      <div className='card-body'>
        <div className='flex-1 flex flex-col'>
          <p className='card-amount py-1'>₡{amount}</p>
          <Subtitles text={title} />
        </div>
      </div>
      {icon_position == 'right' && (
        <CardIcon icon={icon} variant={icon_variant} />
      )}
    </div>
  )
}
