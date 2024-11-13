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
        <>
        <button onClick={toggleSidebar} className='hamburguer'>
            <span className={`line transition-transform ${isExpanded ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`line transition-opacity ${isExpanded ? 'opacity-0' : ''}`}></span>
            <span className={`line transition-transform ${isExpanded ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

            <section className={`sidebar ${isExpanded ? 'max-w-72' : 'w-20'}`}>
                <nav className='flex flex-col gap-4 relative w-full'>
                    <Link href="/" className='mb-10 text-center cursor-pointer items-center gap-2'>
                        <h1 className={`sidebar-logo  ${!isExpanded && 'hidden'}`}>
                            FiApp
                        </h1>
                    </Link>
                    <div>
                        {sidebarLinks.map((item) => {
                            const isActive = pathname == item.route || pathname.startsWith(`${item.route}/`);

                            return (
                                <Link key={item.label} href={item.route} className={`sidebar-link ${isActive ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : ''}`}>
                                    <div className='relative size-6'>
                                        <Image src={item.icon} fill alt={item.label} className={`brightness-50 ${isActive ? 'brightness-200 invert' : ''}`} />
                                    </div>
                                    <p className={`sidebar-label ${!isExpanded && 'hidden'}`}>
                                        {item.label}
                                    </p>
                                </Link>
                            )
                        })}
                        <button onClick={toggleSidebar} className="toggle-button">
                            {isExpanded ? (
                                <Image src="/images/icons-sidebar/chevron-left-solid.svg" width={10} height={10} alt='close' className='invert ' />
                            ) : (
                                <Image src="/images/icons-sidebar/chevron-right-solid.svg" width={10} height={10} alt='open' className='invert ' />
                            )}

                        </button>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Sidebar
