import { SubtitlesProps } from '@/types'
import React from 'react'

export default function Title({text, variants}: SubtitlesProps) {
    return (
        <div>
            <h1 className={`font-bold text-3xl text-[#4A617D] dark:text-white ${variants}`}>{text}</h1>
        </div>
    )
}
