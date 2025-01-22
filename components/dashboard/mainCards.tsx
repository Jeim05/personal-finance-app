import React from "react";
import Card from "./card";
import { faHandHoldingDollar, faMoneyBills, faMoneyBillTransfer, faWallet, } from "@fortawesome/free-solid-svg-icons";

export default function MainCards() {
  return (
    <div className="cards-wrapper">
      <Card
        title="Ingreso mensual"
        amount={373000}
        variant="bg-[#75D6E4]"
        icon={faHandHoldingDollar}
      />
      <Card
        title="Presupuesto"
        amount={500000.0}
        variant="bg-[#EDB043]"
        icon={faMoneyBills}
      />
      <Card
        title="Egreso mensual"
        amount={500000.0}
        variant="bg-[#A168D3]"
        icon={faMoneyBillTransfer}
      />
      <Card
        title="Monto Disponible"
        amount={500000.0}
        variant="bg-[#FD8B63]"
        icon={faWallet}
      />
    </div>
  );
}
