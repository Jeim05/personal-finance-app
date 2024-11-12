'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Sidebar = () => {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <section className={`sidebar ${isExpanded ? 'w-64' : 'w-20'}`}>
            <nav className='flex flex-col gap-4 relative'>
                <Link href="/" className='mb-10 text-center cursor-pointer items-center gap-2'>
                    <h1 className={`sidebar-logo  ${!isExpanded && 'hidden'}`}>
                        FiApp
                    </h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname == item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link key={item.label} href={item.route} className={`sidebar-link ${isActive ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : ''}`}>
                            <div className='relative size-6'>
                                <Image src={item.icon} fill alt={item.label} className={`brightness-50 ${isActive ? 'brightness-200 invert' : '' }`} />
                            </div>
                            <p className={`sidebar-label ${!isExpanded && 'hidden'}`}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
                <button onClick={toggleSidebar} className="toggle-button">
                    {isExpanded ? (
                        <Image src="/images/icons-sidebar/chevron-left-solid.svg" width={10} height={10} alt='close' />
                    ):(
                        <Image src="/images/icons-sidebar/chevron-right-solid.svg" width={10} height={10} alt='open' />
                    )}
                    
                </button>
            </nav>
        </section>
    )
}

export default Sidebar
