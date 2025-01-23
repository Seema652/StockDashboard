import React from 'react'
import { Button } from 'react-bootstrap'

function ModuleDetails() {
    return (
        <div className='card'>
            <div className='  table-responsive active-projects style-1'>
                <h2 className='bg-dark text-light tbl-caption tbl-caption-2'>New Custom Module </h2>
            </div>
            <form className='row w-70'>
                <div className='from-group col-4 '>
                    <label htmlFor='caption'>Caption</label>
                    <input type="text" class="form-control" id="caption" aria-describedby="caption" />
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='modulename'>Module Name</label>
                    <input type="text" class="form-control" id="modulename" aria-describedby="modulename" />
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='singularmodulename'>Singular Module Name</label>
                    <input type="text" class="form-control" id="singularmodulename" aria-describedby="singularmodulename" />
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='apiename'>Api Name</label>
                    <input type="text" class="form-control" id="apiname" aria-describedby="apiname" />
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='application'>Applicatin</label>
                    <select type="text" class="form-control" id="application" aria-describedby="application">

                        <option value=""></option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">sales</option>
                        <option value="master">master</option>
                    </select>
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='alias'>Alias</label>
                    <input type="text" class="form-control" id="alias" aria-describedby="alias" />
                </div>
                <div className='from-group col-4 '>
                    <span class="">Description</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className='row'>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Activities</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Notes</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Document</label>
                </div>  
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Email</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Web Template</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Include in Global Search</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Tree View Reuqired</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Allow Sharing</label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Allow Print</label>
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

export default ModuleDetails
