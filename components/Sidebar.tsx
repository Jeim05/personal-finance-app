import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-violet-500 font-bold text-2xl'>
                        MyFinanceApp
                    </h1>
                </Link>
                {sidebarLinks.map((item) => {
                    return (
                        <Link key={item.label} href={item.route} className='text-black'>{item.label}</Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default Sidebar