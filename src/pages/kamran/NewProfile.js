import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MarketListing from '../../components/kamran/MarketListing';


function NewProfile() {
    const [profile, setProfile] = useState (0);

    const profileHandle = (num) => {
        setProfile (num)
    }

    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h2 className='tbl-caption text-light'> New Profile</h2></div>
            <h6 className='border-bottom'>Profile Details</h6>
            <from className="row text-center">
                <div className='from-group col-4 '>
                    <label htmlFor='caption'>Name</label>
                    <input type="text" class="form-control" id="caption" aria-describedby="caption" />
                </div>
                <div className='from-group col-4 '>
                    <span class="">Description</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </from>
            <h6 className='border-bottom'>Module Access Rights</h6>
            <div className=''>
                <div>
                    <ul className='d-flex'>
                        <li className=''onClick={()=>profileHandle(0)}>
                        <button type='button'className={`btn m-0 ${profile === 0 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}>Marketing</button>
                        </li>
                   <li className=''onClick={()=> profileHandle(1)}>
                   <button type='button'className={`btn m-0 ${profile === 1 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}>Sales</button>
                   </li>
                    <li className=''onClick={()=>profileHandle(2)}>
                    <button type='button'className={`btn m-0 ${profile === 2 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}>Master</button>
                    </li>
                    <li className=''onClick={()=> profileHandle(3)}>
                    <button type='button'className={`btn m-0 ${profile === 3 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}>E-Commerce</button>
                       </li>
                    <li className=''onClick={()=>profileHandle(4)}>
                    <button type='button'className={`btn m-0 ${profile === 4 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}>Leasing</button>
                    </li>
                    </ul>
                </div>
            </div>
           <div className={profile === 0 ? "d-block" : "d-none"}>
<MarketListing/>
           </div>
           <div className={profile === 1 ? "d-block" : "d-none"}><MarketListing/></div>
           <div className={profile === 2 ? "d-block" : "d-none"}><MarketListing/></div>
           <div className={profile === 3 ? "d-block" : "d-none"}><MarketListing/></div>
           <div className={profile === 4 ? "d-block" : "d-none"}><MarketListing/></div>
        </div>
    )
}

export default NewProfile
