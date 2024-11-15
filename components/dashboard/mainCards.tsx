import React from 'react'
import Card from './card'
import { faHandHoldingDollar, faMoneyBillTransfer, faWallet, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'

export default function MainCards() {
  return (
    <div className='container flex flex-row gap-4 justify-between'>
        <Card title='Ingreso mensual' amount={500000} icon={faHandHoldingDollar} icon_variant='text-[#]' variant='bg-[#DAE9E8]' />
        <Card title='Egreso' icon={faMoneyBillTransfer} amount={60000} icon_variant='' variant='bg-[#F9E0E1]' />
        <Card title='Saldo disponible' amount={50000} icon={faWallet} icon_variant='' variant='bg-[#D8E2FC]' />
        <Card title='Presupuesto Mensual' amount={200000} icon={faMagnifyingGlassDollar} icon_variant='' variant='bg-[#CDE7FC]' />
    </div>
  )
}
