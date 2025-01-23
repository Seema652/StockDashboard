import React, { useEffect, useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";
import { getCreblock, getCreBuilding, getCreFloor, getCreOpportunityUnit, getCreProperty, getCreUnit, getCreVenture } from "../../api/login/Login";

export default function BookingForm({ store, handleChange }) {
    const [opportunity , setOpportunity] = useState(null)
    const [venture, setVenture] = useState(null)
    const [property , setProperty] = useState(null)
    const[block, setBlock] = useState(null)
    const [floor, setFloor] = useState(null)
    const [unit , setUnit] =useState(null)
    const[building , setBuilding] =useState(null)

    const dataStore = async()=> {
        try{
            const opu = await getCreOpportunityUnit(0 ,100)
            const ven = await getCreVenture(0 ,100)
            const pro = await getCreProperty(0 , 100)
            const blc = await getCreblock(0 , 100)
            const flo = await getCreFloor(0 , 100 )
            const un = await getCreUnit(0 , 100)
            const bul = await getCreBuilding(0 ,100)
            setOpportunity(opu.data?.opportunity)
            setVenture(ven.data?.venture)
            setProperty(pro.data?.property)
            setBlock(blc.data?.block)
            setFloor(flo.data?.floor)
            setUnit(un.data?.data)
            setBuilding(bul.data?.building)
        }catch(error){
            console.error("error")
        }
    }
    useEffect(()=>{
        dataStore()
    }, [])
    return (
        <div className="p-2">
            <h1 className="fs-5">General</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Booking No</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"}
                                        value={store.booking_no}
                                        name="booking_no"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Customer Name</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.customer_name}
                                    name="customer_name"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Assigned To</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Select</option>
                                        {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Opportunity</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="oppertunity" value={store.opportunity}>
                                        <option>Select</option>
                                        {opportunity && opportunity?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Customer</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Select</option>
                                        {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Venture</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="venture" value={store.venture}>
                                        <option>Select</option>
                                        {venture && venture?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Property</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="property" value={store.property}>
                                        <option>Select</option>
                                        {property && property?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Block</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="block" value={store.block}>
                                        <option>Select</option>
                                        {block && block?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Floor</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="floor" value={store.floor}>
                                        <option>Select</option>
                                        {floor && floor?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Unit</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="unit" value={store.unit}>
                                        <option>Select</option>
                                        {unit && unit?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Building Tower</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} name="building_tower" value={store.building_tower}>
                                        <option>Select</option>
                                        {building && building?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Rdeports</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Select</option>
                                        {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Base Selling Price</label>
                                <div className="w-100">
                                    <CustomInputField type={"Number"} 
                                        value={store.base_selling_price}
                                        name="base_selling_price"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Selling Price</label>
                                <div className="w-100">
                                    <CustomInputField type={"Number"}
                                        value={store.selling_price}
                                        name="selling_price"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Discount</label>
                                <div className="w-100">
                                    <CustomInputField type={"Number"} 
                                        value={store.discount}
                                        name="discount"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Associate</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Select</option>
                                        {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}