import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import { ITEMS_MENU } from '@/constants'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faChartLine);

function Sidebar() {
  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm w-60'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <Link href='/' className='font-bold'>
            FINANCE APP
          </Link>
          <button className='p-1.5 rounded-lg text-xl text-black bg-gray-50 hover:bg-gray-100'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div>
        <ul className='flex-1 px-3'>
          {ITEMS_MENU.map((item)=>(
            <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md`}>
            <Link href="/">
              <FontAwesomeIcon icon={item.icon} /> {item.label}
            </Link>
          </li>
          ))} 
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar