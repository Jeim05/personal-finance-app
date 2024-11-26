"use client";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css'; // Estilo predeterminado de DataTables

// Registrar las extensiones
DataTable.use(DT);

const TableTransactions = () => {
  const data = [
    ["1", "John Doe", "johndoe@example.com", "Admin"],
    ["2", "Jane Smith", "janesmith@example.com", "User"],
    ["3", "Bob Brown", "bobbrown@example.com", "Editor"],
    ["4", "John Doe", "johndoe@example.com", "Admin"],
    ["5", "Jane Smith", "janesmith@example.com", "User"],
    ["6", "Bob Brown", "bobbrown@example.com", "Editor"],
    ["7", "John Doe", "johndoe@example.com", "Admin"],
    ["8", "Jane Smith", "janesmith@example.com", "User"],
    ["9", "Bob Brown", "bobbrown@example.com", "Editor"],
    ["10", "John Doe", "johndoe@example.com", "Admin"],
    ["11", "Jane Smith", "janesmith@example.com", "User"],
    ["12", "Bob Brown", "bobbrown@example.com", "Editor"],
  ];

  const columns = [
    { title: "ID" },
    { title: "Nombre" },
    { title: "Correo Electrónico" },
    { title: "Rol" },
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
          responsive: true, // Activa el diseño responsivo
        }}
        className="table-auto w-full text-sm text-left border-collapse border border-gray-300 dark:border-gray-700"
      />
    </div>
  );
};

export default TableTransactions;
