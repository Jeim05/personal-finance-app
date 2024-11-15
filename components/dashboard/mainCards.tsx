import React from 'react'
import Card from './card'
import { faHandHoldingDollar, faMoneyBillTransfer, faWallet, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'

export default function MainCards() {
  return (
    <div className='container flex flex-row gap-4 justify-between'>
        <Card title='Ingreso mensual' amount={500000.00} icon={faHandHoldingDollar} icon_variant='text-[#86A1A0]' variant='bg-[#DAE9E8]' />
        <Card title='Egreso Actual Mensual' icon={faMoneyBillTransfer} amount={600000} icon_variant='text-[#AD9596]' variant='bg-[#F9E0E1]' />
        <Card title='Saldo disponible' amount={50000} icon={faWallet} icon_variant='text-[#99A1B7]' variant='bg-[#D8E2FC]' />
        <Card title='Presupuesto Mensual' amount={200000} icon={faMagnifyingGlassDollar} icon_variant='text-[#A7BCCD]' variant='bg-[#CDE7FC]' />
    </div>
  )
}
