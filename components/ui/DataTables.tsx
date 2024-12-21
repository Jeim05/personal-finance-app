import React, { useEffect } from 'react'
import { DataTableProps } from '@/types'
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt";
import $ from "jquery";

export const DataTables = ({ data, columns }: DataTableProps) => {
    useEffect(() => {
        const table = $('#idTable').DataTable();

        return () => {
            table.destroy();
        }
    }, [])

    return (
        <div className="overflow-x-auto">
            <table id="idTable" className="table-auto w-full text-left border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="px-4 py-2 border border-gray-300">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-4 py-2 border border-gray-300">
                                    {row[col] ?? ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
