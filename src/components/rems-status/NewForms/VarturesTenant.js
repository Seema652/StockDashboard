import React from "react";
import { Link } from "react-router-dom";

export default function VarturesTenant(){
    return( 
        <div className="mt-3">
            <table className="w-100">
                <tr className="p-1 bg-light">
                    <th className="p-1">
                        <input type="checkbox"/>
                    </th>
                    <th className="p-1">Action</th>
                    <th className="p-1">Name</th>
                    <th className="p-1">Code</th>
                    
                </tr>
                <tr className="border p-1">
                    <td className="p-1"><input type="checkbox"/></td>
                    <td className="p-1">
                        <div className="d-flex gap-2">
                            <Link ><i class="fa-solid fa-pen-to-square"></i></Link>
                            <Link ><i class="fa-regular fa-circle-xmark"></i></Link>
                        </div>
                    </td>
                    <td className="p-1">Ranjit</td>
                    <td className="p-1">DG</td>
                   
                </tr>
                <tr className="border p-1">
                    <td className="p-1"><input type="checkbox"/></td>
                    <td className="p-1">
                        <div className="d-flex gap-2">
                            <Link ><i class="fa-solid fa-pen-to-square"></i></Link>
                            <Link ><i class="fa-regular fa-circle-xmark"></i></Link>
                        </div>
                    </td>
                    <td className="p-1">Susheel</td>
                    <td className="p-1">DG</td>
                    
                </tr>
                <tr className="border p-1">
                    <td className="p-1"><input type="checkbox"/></td>
                    <td className="p-1">
                        <div className="d-flex gap-2">
                            <Link ><i class="fa-solid fa-pen-to-square"></i></Link>
                            <Link ><i class="fa-regular fa-circle-xmark"></i></Link>
                        </div>
                    </td>
                    <td className="p-1">Priyanshu</td>
                    <td className="p-1">DG</td>
                    
                </tr>
                
            </table>
        </div>
    )
}