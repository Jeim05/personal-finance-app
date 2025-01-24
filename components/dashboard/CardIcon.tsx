import { IconProps } from '@/types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardIcon = ({variant, icon }:IconProps) => {
    return (
        <div className={`card-icon ${variant}`}>
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}
