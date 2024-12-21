"use client";
import { DataTables } from "../ui/DataTables";

const TableTransactions = () => {

  
  const columns = ["ID", "Nombre", "Correo"];
  const data = [
    { ID: 1, Nombre: "Jeimmy Lopez", Correo: "jeimmy@example.com" },
    { ID: 2, Nombre: "Juan Perez", Correo: "juan@example.com" },
    { ID: 3, Nombre: "Ana Gomez", Correo: "ana@example.com" },
  ];

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Mi Tabla Dinámica</h1>
    <DataTables data={data} columns={columns} />
  </div>
  );
};

export default TableTransactions;
