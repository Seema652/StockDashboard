import { use } from 'i18next';
import React, { useState } from 'react'
import { useToast } from 'react-toastify';

function FormCancel() {
  const [CancellationNo, SetCancellationNo] = useState('');
  const [Costumer, setCostumer] = useState('');
  const [BookingNo, setBookingNo] = useState('');
  const [Ventures, setVentures] = useState('');
  const [Property, setproperty] = useState('');
  const [Block, setBlock] = useState('');
  const [Floor, setFloor] = useState('');
  const [Unit, setUnit] = useState('');
  const [CancellationDate, SetCancellationDate] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [ReceivedAmount, setReceivedAmount] = useState('');
  const [CancellationAmount, SetCancellationAmount] = useState('');
  const [RefundAmount, setRefundAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      CancellationNo,
      Costumer,
      BookingNo,
      Ventures,
      Property,
      Block,
      Floor,
      Unit,
      CancellationDate,
      sellingPrice,
      ReceivedAmount,
      CancellationAmount,
      RefundAmount,
    });
  };
  return (
    <div className='row m-4 card table-responsive active-projects style-1'>
      <h2 className='bg-dark text-light tbl-caption tbl-caption-2'>New Booking Cancellation </h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className='from-group col-6'>
          <label htmlFor="cancellationNO">Cancellation No</label>
          <input
            type="text"
            className="form-control rounded-2"
            id="cancellationNo"
            value={CancellationNo}
            onChange={(e) => SetCancellationNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group rounded-2  col-6">
          <label htmlFor="customer">Costumer</label>
          <select
            className="form-control"
            id="costumer"
            value={Costumer}
            onChange={(e) => setCostumer(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="autoliv">Autoliv</option>
            <option value="alphabet">Alphabet</option>
            <option value="arconic">Arconic</option>
          </select>
        </div>
        <div className="form-group rounded-2 col-6">
          <label htmlFor="booking">Booking</label>
          <select
            className="form-control"
            id="bookingNo"
            value={BookingNo}
            onChange={(e) => setBookingNo(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="bk-01">BK-01</option>
            <option value="bk-02">BK-02</option>
            <option value="bk-03">BK-03</option>
          </select>
        </div>
        <div className="form-group rounded-2 col-6">
          <label htmlFor="ventures">Costumer</label>
          <select
            className="form-control"
            id="ventures"
            value={Ventures}
            onChange={(e) => setVentures(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="dostigroup">Dosti group</option>
            <option value="skyhouse">SkyHouse</option>
            <option value="jaitpur">Jaitpur</option>
          </select>
        </div>
        <div className="form-group rounded-2 col-6">
          <label htmlFor="property">Property</label>
          <select
            className="form-control"
            id="property"
            value={Property}
            onChange={(e) => setproperty(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="phase-ll">Phase-ll</option>
            <option value="kalindikunj">Kalindi Kunj</option>
            <option value="Graterkailesh">Grater Kailesh</option>
          </select>
        </div>
        <div className="form-group rounded-2 col-6">
          <label htmlFor="block">Block</label>
          <select
            className="form-control"
            id="block"
            value={Block}
            onChange={(e) => setBlock(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="block-a">Block-A</option>
            <option value="block-b">Block-B</option>
            <option value="block-c">Block-C</option>
          </select>
        </div>
        <div className="form-group  col-6">
          <label htmlFor="floor">Floor</label>
          <select
            className="form-control rounded-2"
            id="floor"
            value={Floor}
            onChange={(e) => setCostumer(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="floor-1">Floor-1</option>
            <option value="floor-2">Floor-2</option>
            <option value="floor-3">Floor-3</option>
          </select>
        </div>
        <div className="form-group  col-6">
          <label htmlFor="unit">Unit</label>
          <select
            className="form-control rounded-2"
            id="unit"
            value={Costumer}
            onChange={(e) => setUnit(e.target.value)}
            required
          >
            <option value="">select...</option>
            <option value="unit-1">Unit-1</option>
            <option value="unit-2">Unit-2</option>
            <option value="unit-3">Unit-3</option>
          </select>
        </div>
        <div className="form-group  col-6">
          <label htmlFor="cancellationDate">Cancellation Date</label>
          <input
            type="date"
            className="form-control rounded-2"
            id="cancellationDate"
            value={CancellationDate}
            onChange={(e) => SetCancellationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group  col-6">
          <label htmlFor="sellingPrice"> selling Price</label>
          <input
            type="text"
            className="form-control rounded-2"
            id="sellingPrice"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receivedAMount"> Received Amount</label>
          <input
            type="text"
            className="form-control rounded-2"
            id="receivedAmount"
            value={ReceivedAmount}
            onChange={(e) => setReceivedAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="cancellation">Cancellation Amount</label>
          <input
            type="text"
            className="form-control rounded-2"
            id="cancellationAmount"
            value={CancellationAmount}
            onChange={(e) => SetCancellationAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="refundAmount">Refund Amount</label>
          <input
            type="text"
            className="form-control rounded-2"
            id="refundAmount"
            value={RefundAmount}
            onChange={(e) => setRefundAmount(e.target.value)}
            required
          />
        </div>
       
      </form>
     <div style={{margin: "10px 0px"}}> 
     <button type="button" class="btn btn-lg btn-primary" disabled>Save</button>
     <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
     </div>
    </div>
    
  )
}

export default FormCancel
