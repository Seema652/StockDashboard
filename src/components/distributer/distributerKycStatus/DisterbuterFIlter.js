import { Alert } from "antd";
import { useEffect, useState } from "react";

function DisterbuterFIlter({ submitForm, initialValues, params, getReailerDistIdAgainst }) {
    const todayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        refer_id: '',
        kycStatus: 'verified',
        leadStatus: '',
        fromDate: todayDate(),
        toDate: todayDate(),
    });

    const [error, setError] = useState('');
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);

    useEffect(() => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: '',
            leadStatus: '',
            fromDate: todayDate(),
            toDate: todayDate(),
        });
    }, [params]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        const trimmedValue = value.trim();
        const mobileRegex = /^\+[1-9]\d{1,3}\d{7,10}$/;

        if (!mobileRegex.test(trimmedValue)) {
            setError('Invalid mobile number. Please enter a valid number with country code.');
            setIsSearchDisabled(true);
        } else {
            setError('');
            setIsSearchDisabled(false);
        }

        setFormData((prevData) => ({ ...prevData, mobile: trimmedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            return;
        }
        submitForm(formData);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: '',
            leadStatus: '',
            fromDate: todayDate(),
            toDate: todayDate(),
        });
        getReailerDistIdAgainst(0);
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter &nbsp; &nbsp;{`${params?.name}`}  </b></h4>
                                </div>
                                <form className="row cusforms p-4" onSubmit={handleSubmit}>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="fromDate">From Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="fromDate"
                                            value={formData.fromDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="toDate">To Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="toDate"
                                            value={formData.toDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter mobile number with country code"
                                            value={formData.mobile}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="refer_id">{params?.name} Ref id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="refer_id"
                                            placeholder={`Enter ${params?.name} ref id`}
                                            value={formData.refer_id}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="kycStatus">KYC Status</label>
                                        <select
                                            className="form-control"
                                            id="kycStatus"
                                            value={formData.kycStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Status </option>
                                            <option value="verified">Verified</option>
                                            <option value="unverified">Unverified</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-3 col-md-6 col-12">
                                        <label htmlFor="leadStatus">Lead Status</label>
                                        <select
                                            className="form-control"
                                            id="leadStatus"
                                            value={formData.leadStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Status </option>
                                            <option value="verified">Verified</option>
                                            <option value="unverified">Unverified</option>
                                        </select>
                                    </div>
                                  
                                    {error && (
                                        <div className="form-group col-12">
                                            <Alert message="Warning" description={error} type="warning" showIcon closable />
                                        </div>
                                    )}
                                    <div className="form-group col-12 d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary" disabled={isSearchDisabled}>
                                            SEARCH
                                        </button>
                                        <button type="button" className="btn btn-warning" onClick={resetForm}>
                                            RESET
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisterbuterFIlter;
