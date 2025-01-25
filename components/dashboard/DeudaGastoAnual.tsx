import React from 'react'
import Card from './card'
import { faFileInvoiceDollar, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

export default function DeudaGastoAnual() {
  return (
    <div className="grid grid-flow-row gap-4">
          <Card
            title="Deuda pendiente"
            amount={1240000}
            icon={faFileInvoiceDollar}
            icon_position="right"
            icon_variant='text-4xl px-4 py-3 bg-[#F4C97C] text-[#C76D07]'
            variant='justify-between px-6 bg-orange text-zinc-500'
          />
          <Card
            title="Gasto Anual"
            amount={1240000}
            icon={faPiggyBank}
            icon_position="right"
            icon_variant='text-4xl px-3 py-3 bg-[#FFCBB9] text-[#FD8B63]'
            variant=' justify-between bg-cyan text-zinc-500'
          />
        </div>
  )
}
