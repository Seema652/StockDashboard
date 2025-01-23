import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";

function TransferBooking() {
    return (
        <div className='bg-secondary w-50 p-3 rounded-3  m-auto' style={{ left: "0px", right: "0px," }}>
            <div className='d-flex gap-4 align-items-center'>
                <div>
                <FaCalendarAlt  size={80}/>
                </div>
                <div>
                    <h1 className='text-warning fs-2 border-bottom '>Transfer Booking</h1>
                    <br />
                    <h4 className='fs-4'>Transfer Booking</h4>
                </div>
            </div>
            <button type="button" class="btn btn-primary">Create</button>
            <button type="button" class="btn btn-light">Import</button>
        </div>
    )
}

export default TransferBooking; 