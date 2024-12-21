"use client";
import { appsettings } from "@/settings/appsettings";
import { DataTables } from "../ui/DataTables";
import { useEffect, useState } from "react";
import { Categoria } from "@/Interfaces/Categoria";

const TableTransactions = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);

   const getCategories = async () => {
      const response = await fetch(`${appsettings.apiUrl}Categoria`);
  
      if (response.ok) {
        const data = await response.json();      
        setCategories(data.value);
      }
    }
  
    useEffect(()=>{
      getCategories()
      console.log(categories)
    },[])


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
