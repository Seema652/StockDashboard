import React, { useState } from "react";
import PSMunit from "./psmunit";
import SaveCancle from "./SaveCancle";
import BookingForm from "./BookingForm";
import PaymentShedule from "./PaymentShedule";
import { toast, ToastContainer } from 'react-toastify';
import { postNewBlock } from "../../api/login/Login";

export default function Booking(){
    const[ store , setStore] =useState({
        booking_no: "",
    customer_name: "",
    assigned_to: "",
    opportunity: "",
    customer: "",
    venture: "",
    property: "",
    block: "",
    floor: "",
    unit: "",
    building_tower: "",
    reports: "",
    base_selling_price: "",
    selling_price: "",
    discount: "",
    associate: "",
    payment_schedule: "",
    additional_charge: [{
        s_no: "",
        charge: "",
        amount: "",
        due_date: "",
    }]
    })

    const handleChange=(e)=>{
        const {name , value} = e.target
        const clone = {...store}
        clone[name] = value
        setStore(clone)
    }
    const Submit= async()=>{
        try{
            const res = await postNewBlock(store)
            if(res.statusCode == 200){
                toastSuccessMessage("success")
            }else{
                toasterrorMessage("error")
            }
        }catch(error){
            console.error("error")
        }
    }
    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };
    const toasterrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };
    return(
        <div>
            <ToastContainer />
            <PSMunit title={"Edit Booking"}/>
            {/* <SaveCancle /> */}
            <BookingForm store={store} handleChange={handleChange}/>
            <PaymentShedule submit={Submit}/>
        </div>
    )
}