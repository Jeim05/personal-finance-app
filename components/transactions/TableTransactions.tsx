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
      <table className='table '>
        <thead className='table-header'>
          <tr>
            <th className='px-2 py-3'>Categoría</th>
            <th className='px-2 py-3'>Monto gastado</th>
          </tr>
        </thead>
        <tbody>
          <tr  className='table-item '>
            <td className='px-2 py-3'>Nombre</td>
            <td className='px-2 py-3'>₡ 15000</td>
          </tr>
        </tbody>
      </table>
      {/* <DataTable
        data={data}
        columns={columns}
        options={{
          paging: true,
          searching: true,
          ordering: true,
          responsive: true, 
        }}
        className="table-auto w-full text-sm text-gray-500 border border-gray-200 dark:text-gray-400 dark:border-gray-700"
      /> */}
    </div>
  );
};

export default TableTransactions;
