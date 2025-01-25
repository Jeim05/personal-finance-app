import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { DarkModeSwitcher } from './ui/DarkModeSwitcher'

export const Header = () => {
    return (
        <header className='h-16 lg:px-10 py-2'>
            <div className='flex flex-row-reverse items-center content-center h-full my-auto gap-4 px-4'>
                <div className='flex gap-2 items-center'>
                    <div className='hidden sm:block'>
                        <p className='font-semibold dark:text-white'>Mi perfil</p>
                    </div>
                    <div className='rounded-full '>
                        <Image src="/images/icons-sidebar/perfil.png" width={25} height={25} alt='' />
                    </div>
                </div>
                <ul className='flex gap-2'>
                    <DarkModeSwitcher />
                    <li className='text-2xl text-blue-500 hover:scale-125 hover:text-cyan-500 '>
                        <FontAwesomeIcon icon={faBell} />
                    </li>
                </ul>
            </div>
        </header>
    )
}
