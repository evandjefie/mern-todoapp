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

  return (
    <div className="relative top-20 py-5 px-8 overflow-x-auto table-fixed npmshadow-md sm:rounded-lg">
    { 
        data.length === 0 ? (
            <p></p>
        ):(
    
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 tab">
            <thead className="text-xs text-white uppercase bg-amber-400">
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
                    (!data) ? (
                        <p>Chargement...</p>
                    ):(
                        data.map((d,i)=>(
                        <tr className="bg-white border-b hover:bg-gray-50 text-gray-400">
                            <th id={i} scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap ">
                                {d.dt}
                            </th>
                            <td id={i} className="px-6 py-4">
                                {d.title}
                            </td>
                            <td id={i} className="px-6 py-4">
                                {d.desc}
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
        )
    }
    </div>
  )
}

export default DataTable;