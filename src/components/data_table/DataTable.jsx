import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function DataTable() {
    const data = [
        {
            dt:"11/05/2023",
            title: "Dormir",
            desc: "desc",
        },
        {
            dt:"21/05/2023",
            title: "Bosser",
            desc: "opLaptopLaptopLaptopLaptop",
        },
        {
            dt:"01/05/2023",
            title: "Sport",
            desc: "zmmmmz",
        }
    ]

    const [Data, SetData] = useState([{}])
    useEffect(()=>{
        fetch("/api").then(
            response => Response.json()
        ).then(
            data => {
                SetData(data)
            }
        )
    })

    // console.log()
  return (
    <div className="py-4 px-8 overflow-x-auto table-fixed npmshadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 tab">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Titre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    (typeof Data.todos == "undefined") ? (
                        <p>Chargement...</p>
                    ):(
                        Data.todos.map((i,d)=>(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th id={i} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d}
                            </th>
                            <td id={i} className="px-6 py-4">
                                {d}
                            </td>
                            <td id={i} className="px-6 py-4">
                                {d}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <EditIcon/>
                                </a>
                            </td>
                            <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <DeleteIcon/>
                            </a>
                            </td>
                        </tr>                
                        ))
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataTable;