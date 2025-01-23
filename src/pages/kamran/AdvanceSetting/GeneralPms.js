import React from 'react'
import { Link } from 'react-router-dom'
function GeneralPms() {
  return (
    <div className='card mt-2'>
      <form className='row'>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Auto invoice raising for PDC on due date</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Allow multiple Units in Enquiry AND Leasing Contract</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Do not create Tenant On Leasing Contract creation</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Do not Inactivate expired Leasing Contract Automatically</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Do not create a Leasing Contract On a  REMS Units having an active  Leasing Contract</label>
        </div>
        <h6 className='border-bottom'>Installment Types </h6>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Do not populate installment dates automatically</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Populate installment dates based on No. of days</label>
        </div>
        <div class="mb-3 form-check col-6">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Populate installment dates based on first installment date</label>
        </div>
        <div className='mb-3 form-check col-6'>
          <select className='form-select' aria-label='Default Payment Module'
            name='Default Payment Module'>
            <option value="">Default Payment Module</option>
            <option value="cash">Cash</option>
            <option value="cheque">cheque</option>
            <option value="creditcard">Credit Card</option>
          </select>
        </div>
        <div className='mb-3 form-check col-6'>
          <select className='form-select' aria-label='Default Cheque status'
            name='Default Cheuqe Status'>
            <option value="">Default Cheque Status</option>
            <option value="cash">Cash</option>
            <option value="cheque">cheque</option>
            <option value="creditcard">Credit Card</option>
          </select>
        </div>
        <div className="col-xl-6 mb-3">
          <input type="text" id="periodic" name="periodic" className="form-control"
            placeholder="Grace days for PMS Contract auto Closing" aria-label="periodic" /></div>
        <table className='table table-bordered' style={{width:"800px" ,margin:"auto"}}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Leasing Contract</th>
              <th scope='col'>Property Status</th>
              <th scope='col'>Contract Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>On creation</td>
              <td>Booked</td>
              <td>Vaild</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>On Termination</td>
              <td>Vacant</td>
              <td>Closed</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>On Legal Case</td>
              <td>Occupied</td>
              <td>Legal Case</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>On Closed</td>
              <td>REnovation</td>
              <td>Closed</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>On Renewal</td>
              <td>Occupied</td>
              <td>@Renewed</td>
            </tr>
          </tbody>
        </table>
        <div className='mt2'>
   <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
    <button className="btn btn-primary me-1" type="submit">Save</button></div>
      </form>
    </div>
  )
}

export default GeneralPms
