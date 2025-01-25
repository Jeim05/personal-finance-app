import React from "react";
import Card from "./card";
import { faHandHoldingDollar, faMoneyBills, faMoneyBillTransfer, faWallet, } from "@fortawesome/free-solid-svg-icons";

export default function MainCards() {
  return (
    <div className="cards-wrapper">
      <Card
        title="Ingreso mensual"
        amount={373000}
        variant="bg-white dark:bg-[#2B2E35]"
        icon={faHandHoldingDollar}
        icon_position="left"
        icon_variant="bg-gray text-green text-3xl w-16 h-16"
      />
      <Card
        title="Presupuesto"
        amount={292500}
        variant="bg-white dark:bg-[#2B2E35]"
        icon={faMoneyBills}
        icon_position="left"
        icon_variant="bg-gray text-cyan text-3xl w-16 h-16"
      />
      <Card
        title="Egreso mensual"
        amount={225400}
        variant="bg-white dark:bg-[#2B2E35]"
        icon={faMoneyBillTransfer}
        icon_position="left"
        icon_variant="bg-gray text-orange text-3xl w-16 h-16" 
      />
      <Card
        title="Monto Disponible"
        amount={30000}
        variant="bg-white dark:bg-[#2B2E35]"
        icon={faWallet}
        icon_position="left"
        icon_variant="bg-gray text-violet text-3xl w-16 h-16"
      />
    </div>
  );
}
