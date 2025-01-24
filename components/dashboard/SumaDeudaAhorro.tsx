import React from 'react'
import Card from './card'
import { faFileInvoiceDollar, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

export default function SumaDeudaAhorro() {
  return (
    <div className="grid grid-flow-row gap-6">
          <Card
            title="Deuda pendiente"
            amount={1240000}
            icon={faFileInvoiceDollar}
            icon_position="right"
            icon_variant='text-5xl w-20 h-20 bg-[#F4C97C] text-[#C76D07]'
            variant='border-2 border-[#EDB043] justify-between px-6 bg-white uppercase text-black'
          />
          <Card
            title="Total Ahorros"
            amount={1240000}
            icon={faPiggyBank}
            icon_position="right"
            icon_variant='text-5xl w-20 h-20 bg-[#FFCBB9] text-[#FD8B63]'
            variant='border-2 border-[#FD8B63] justify-between bg-white uppercase text-black'
          />
        </div>
  )
}
