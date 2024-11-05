'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4 '>
                <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
                    <h1 className='bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent font-bold text-2xl'>
                        MyFinanceApp
                    </h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname == item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link key={item.label} href={item.route} className={`sidebar-link ${isActive ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : ''}`}>
                            <div className='relative size-6'>
                                <Image src={item.icon} width={20} height={20} alt={item.label} fill className='brightness-[3] invert-0' />
                            </div>
                            <p className='>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default Sidebar