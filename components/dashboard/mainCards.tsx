import React from "react";
import Card from "./card";
import { faHandHoldingDollar, faMoneyBillTransfer, faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function MainCards() {
  return (
    <div className="container flex flex-col lg:flex-row gap-4 justify-between">
      <Card
        title="Ingreso mensual"
        amount={500000.0}
        icon={faHandHoldingDollar}
        icon_variant="text-[#7EB5B1]"
        arrow={faArrowUp}
        arrow_variant="text-green-500"
      />
      <Card
        title="Egreso Actual Mensual"
        icon={faMoneyBillTransfer}
        amount={60000}
        icon_variant="text-[#B25C60]"
        arrow={faArrowDown}
        arrow_variant="text-red-500"
      />
    </div>
  );
}
