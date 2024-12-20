import React from 'react'
import Card from './card'
import { faPiggyBank, faSackDollar} from "@fortawesome/free-solid-svg-icons";

export const SavingDebts = () => {
  return (
    <div className="cards-wrapper my-4">
      <Card
        title="Ahorro"
        amount={500000.0}
        icon={faPiggyBank}
        icon_variant="text-[#7EB5B1]"
        arrow={faPiggyBank}
        arrow_variant="text-green-500"
      />
      <Card
        title="Egreso Mensual"
        icon={faSackDollar}
        amount={60000}
        icon_variant="text-[#B25C60]"
        arrow={faSackDollar}
        arrow_variant="text-red-500"
      />
    </div>
  )
}
