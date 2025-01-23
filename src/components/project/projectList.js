import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

const tablehead = [
    {id:"0", title: "#"},
    {id:"1", title: "Project Name"},
    {id:"2", title: "Customer"},
    {id:"3", title: "Tags"},
    {id:"4", title: "Start Date"},
    {id:"5", title: "Deadline"},
    {id:"6", title: "Members"},
    {id:"7", title: "Status"},
]

const TableTitle = [
    {id: "0", subtitle : [
        {id:"0.0", color: "text-primary", title: "3"},
        {id:"0.1", color: "text-primary", title: "lorem 1"},
        {id:"0.2", color: "text-primary", title: "Kuhic LLC"},
        {id:"0.3", color: "border text-Secondary", title: "SEO Optimization"},
        {id:"0.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"0.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"0.6", color: "text-Secondary", title: ""},
        {id:"0.7", color: "text-primary border", title: "in progress"},
    ]},
    {id: "1", subtitle : [
        {id:"1.0", color: "text-primary", title: "1"},
        {id:"1.1", color: "text-primary", title: "lorem 2"},
        {id:"1.2", color: "text-primary", title: "Gaylord-Leannon"},
        {id:"1.3", color: "border text-Secondary", title: "wordpress"},
        {id:"1.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"1.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"6.6", color: "text-secondary", title: ""},
        {id:"7.7", color: "border text-primary", title: "in progress"},
    ]},
    {id: "1", subtitle : [
        {id:"1.0", color: "text-primary", title: "1"},
        {id:"1.1", color: "text-primary", title: "lorem 2"},
        {id:"1.2", color: "text-primary", title: "Gaylord-Leannon"},
        {id:"1.3", color: "border text-Secondary", title: "wordpress"},
        {id:"1.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"1.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"6.6", color: "text-secondary", title: ""},
        {id:"7.7", color: "border text-primary", title: "in progress"},
    ]},
    {id: "1", subtitle : [
        {id:"1.0", color: "text-primary", title: "1"},
        {id:"1.1", color: "text-primary", title: "lorem 2"},
        {id:"1.2", color: "text-primary", title: "Gaylord-Leannon"},
        {id:"1.3", color: "border text-Secondary", title: "wordpress"},
        {id:"1.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"1.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"6.6", color: "text-secondary", title: ""},
        {id:"7.7", color: "border text-primary", title: "in progress"},
    ]},
    {id: "1", subtitle : [
        {id:"1.0", color: "text-primary", title: "1"},
        {id:"1.1", color: "text-primary", title: "lorem 2"},
        {id:"1.2", color: "text-primary", title: "Gaylord-Leannon"},
        {id:"1.3", color: "border text-Secondary", title: "wordpress"},
        {id:"1.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"1.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"6.6", color: "text-secondary", title: ""},
        {id:"7.7", color: "border text-primary", title: "in progress"},
    ]},
    {id: "1", subtitle : [
        {id:"1.0", color: "text-primary", title: "1"},
        {id:"1.1", color: "text-primary", title: "lorem 2"},
        {id:"1.2", color: "text-primary", title: "Gaylord-Leannon"},
        {id:"1.3", color: "border text-Secondary", title: "wordpress"},
        {id:"1.4", color: "text-Secondary", title: "2024-10-01"},
        {id:"1.5", color: "text-Secondary", title: "2024-12-01"},
        {id:"6.6", color: "text-secondary", title: ""},
        {id:"7.7", color: "border text-primary", title: "in progress"},
    ]},
]
export default function ProjectList(){
    return(
        <div>
            <table className="main-tab">
                <tr className="main-tr">
                    {tablehead?.map((Item, i)=>
                    <th key={i} className="main-th">{Item.title}</th>
                    )}
                </tr>
                 {TableTitle.map((item, i)=>
                <tr key={i}>
                    {item.subtitle.map((text, y)=>
                        <td key={y} className={`sec-td`}><Link to="/" className={`fs-4 ${text.color}`}>{text.title}</Link></td>
                    )}
                </tr>
                )}
            </table>
        </div>  
    )
}