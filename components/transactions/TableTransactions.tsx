"use client";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';

DataTable.use(DT);

const TableTransactions = () => {
  const data = [
    ["1", "27/11/2024", "Alimentos", "Compras super", "Tarjeta", "Egreso", 15000]

  ];

  const columns = [
    { title: "ID" },
    { title: "Fecha" },
    { title: "Categoria" },
    { title: "Descripcion" },
    { title: "Método pago" },
    { title: "Tipo Transacción" },
    { title: "Monto" }
  ];

  return (
    <div className="p-4">
      <DataTable
        data={data}
        columns={columns}
        options={{
          paging: true,
          searching: true,
          ordering: true,
          responsive: true, 
        }}
        className="table-auto w-full text-sm text-left border-collapse border border-gray-300 dark:border-gray-700"
      />
    </div>
  );
};

export default TableTransactions;
