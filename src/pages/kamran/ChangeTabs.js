import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function ChangeTabs() {
    return (
        <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
            <div className='table-responsive active-projects style-1' >
                <h3 className='tbl-caption text-light'>My Change Tabs</h3>
                       {/*  <Link className="btn btn-primary btn-sm" to="/moduledetails" role="button" aria-controls="offcanvasExample">+ Change Tab List</Link>
            <button type="button" className="btn btn-secondary btn-sm" >
                                    + Invite Employee
                                </button> */}
            </div>
            <form >
                <div className='row'>
                    <div className='from-group col-6  '>
                        <div className='d-flex align-items-center '>
                            <label className='text-nowrap pe-2' htmlFor='application'>Application : </label>
                            <select type="text" className="form-control" id="application" aria-describedby="application">

                                <option value=""></option>
                                <option value="marketing">Marketing</option>
                                <option value="sales">sales</option>
                                <option value="master">master</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 form-check col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Set As Default</label>
                    </div>
                </div>

                <div className='row gap-3 mt-4 d-flex justify-content-center'>
                    <div className='col-5 border'>
                        
                        <h3>Available</h3>
                        <div style={{ textDecoration: "none" }}>
                            <ul>
                                <li><a href='account'>Account</a></li>
                                <li><a href='campaigns'>Campaigns</a></li>
                                <li><a href='contact'>Contact</a></li>
                                <li><a href='type-of-business'>Type Of Business</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-5 border'>
                        <h3>Select Tabs</h3>
                        <div style={{overflow: "hidden" }}>
                            <ul>
                                <li><a href='property'>Property</a></li>
                                <li><a href='tenant'>Tenant</a></li>
                                <li><a href='agent'>Agent</a></li>
                                <li><a href='block'>Blocks</a></li>
                                <li><a href='chargers'>Chargers</a></li>
                                <li><a href='rems'>REMS</a></li>
                                <li><a href='floor'>Floor</a></li>
                                <li><a href='brokers'>Brokers</a></li>
                            </ul>          
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='from-group col-6 '>
                        <label htmlFor='defaultlandingtabs'>Default Landing Tabs</label>
                        <select type="text" class="form-control" id="defaultlandingtabs" aria-describedby="defalutlandingtabs">

                            <option value=""></option>
                            <option value="marketing">Tenant</option>
                            <option value="sales">Agent</option>
                            <option value="master">Legal Case</option>
                        </select>
                    </div>
                    <div className='from-group col-6 '>
                        <label htmlFor='defaultdashboard'>Default DashBoard</label>
                        <select type="text" class="form-control" id="defaultlandingtabs" aria-describedby="defalutlandingtabs">
                            <option value=""></option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">sales</option>
                            <option value="master"> Case</option>
                        </select>
                    </div>
                </div>
            </form>
            <div style={{margin: "10px 0px"}}> 
     <button type="button" class="btn btn-lg btn-primary" disabled>Save</button>
     <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
     </div>
        </div>
    )
}

export default ChangeTabs
