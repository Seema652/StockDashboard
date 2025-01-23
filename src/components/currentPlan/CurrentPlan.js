import React from 'react';
import { Link } from 'react-router-dom';

const CurrentPlan = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <div className='row'>

            <div className='col-12 d-flex justify-content-between align-items-center border-b pb-2'>
              <h4>Current Plan</h4>
              <Link to="/plan-details-upgrade" className="btn btn-primary">
                <i className="fa-solid fa-pen-nib pe-2"></i>Upgrade
              </Link>
            </div>

            <div className='col-12 mt-3'>
              <div className='row'>
                <div className='col-2'><strong>Plan Type</strong></div>
                <div className='col-10'>Ultimate <span>(REMS)</span></div>
                <div className='col-2'><strong>Users</strong></div>
                <div className='col-10'>3</div>
                <div className='col-2'><strong>Plan Amount</strong></div>
                <div className='col-10'>$99.99</div> 
                <div className='col-2'><strong>Trial Period</strong></div>
                <div className='col-10'>30 Days</div> 
              </div>
            </div>

            <div className='col-12 mt-4 border p-4'>
              <div className='mb-2'>
                <strong>Payment Details</strong>
              </div>
              <table className='table'>
                <tbody>
                  <tr>
                    <td>Recurring subscription charges</td>
                    <td>Trial Period</td> 
                  </tr>
                  <tr>
                    <td>Tax Amount</td>	
                    <td>Trial Period</td> 
                  </tr>
                  <tr>
                    <td>Total charges</td>
                    <td>Trial Period</td> 
                  </tr>
                  <tr>
                    <td>Subscription renewal date</td>
                    <td></td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlan;
