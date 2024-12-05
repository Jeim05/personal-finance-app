'use client'

import { Categoria } from "@/Interfaces/Categoria"
import { appsettings } from "@/settings/appsettings";
import { useEffect, useState } from "react"

export const CategoriesTable = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);

  const getCategories = async () => {
    const response = await fetch(`${appsettings.apiUrl}categorias`);

    if (response.ok) {
      const data = await response.json();
      console.log(data.body);
      
      setCategories(data.body);
    }
  }

  useEffect(()=>{
    getCategories()
  },[])


  return (
    <div className='bg-cards basis-1/2 '>
      <div className='px-4 py-4 relative overflow-x-auto'>
        <table className='table '>
          <thead className='table-header'>
            <tr>
              <th className='px-2 py-3'>Categoría</th>
              <th className='px-2 py-3'>Monto gastado</th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((item) => (
                <tr key={item.IdCategoria} className='table-item '>
                  <td className='px-2 py-3'>{item.Nombre}</td>
                  <td className='px-2 py-3'>₡ 15000</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
