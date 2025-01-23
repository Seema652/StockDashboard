import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postCallConvertStatus, updateCallConvertStatusById, getCallConvertStatusById } from '../../../../../api/login/Login';

function CreateContext() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Contest",
    };
    
    const [initialValues, setInitialValues] = useState({
        name: "",
        joiningAmount: "",
        contestType: "",
        priceMoney: "",
        startDate: "",
        endDate: "",
        image: null,
    });
    
    const params = useParams();
    const navigate = useNavigate();
    
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Contest Name is required";
        }
        if (!values.joiningAmount) {
            errors.joiningAmount = "Joining Amount is required";
        }
        if (!values.contestType) {
            errors.contestType = "Contest Type is required";
        }
        if (!values.priceMoney) {
            errors.priceMoney = "Price Money is required";
        }
        if (!values.startDate) {
            errors.startDate = "Start Date is required";
        }
        if (!values.endDate) {
            errors.endDate = "End Date is required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("joiningAmount", values.joiningAmount);
        formData.append("contestType", values.contestType);
        formData.append("priceMoney", values.priceMoney);
        formData.append("startDate", values.startDate);
        formData.append("endDate", values.endDate);
        if (values.image) {
            formData.append("image", values.image);
        }

        try {
            if (!params?.id) {
                // POST request to create a new contest
                const res = await postCallConvertStatus(formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Contest added successfully");
                    navigate(`/convert-status`);
                }
            } else {
                // PUT request to update an existing contest
                const res = await updateCallConvertStatusById(params.id, formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Contest updated successfully");
                    navigate(`/convert-status`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchContestData = async () => {
            if (params?.id) {
                const response = await getCallConvertStatusById(params.id);
                setInitialValues({
                    name: response?.data?.name || "",
                    joiningAmount: response?.data?.joiningAmount || "",
                    contestType: response?.data?.contestType || "",
                    priceMoney: response?.data?.priceMoney || "",
                    startDate: response?.data?.startDate || "",
                    endDate: response?.data?.endDate || "",
                    image: null, // Image will be uploaded again
                });
            }
        };

        fetchContestData();
    }, [params?.id]);

    const handleChangeImage = (e) => {
        const selectedImage = e.target.files[0];
        setInitialValues({ ...initialValues, image: selectedImage });
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Create Contest
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Contest Name</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Contest Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Joining Amount</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.joiningAmount}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.joiningAmount}
                                                        name="joiningAmount"
                                                        placeholder="Joining Amount"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Contest Type</h6>
                                                    <select
                                                        className="form-select"
                                                        name="contestType"
                                                        value={values.contestType}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Contest Type</option>
                                                        <option value="Free">Free</option>
                                                        <option value="Paid">Paid</option>
                                                    </select>
                                                    {touched.contestType && errors.contestType && (
                                                        <div className="text-danger">{errors.contestType}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Price Money</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.priceMoney}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.priceMoney}
                                                        name="priceMoney"
                                                        placeholder="Price Money"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Start Date</h6>
                                                    <CustomInputField
                                                        type="date"
                                                        value={values?.startDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.startDate}
                                                        name="startDate"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>End Date</h6>
                                                    <CustomInputField
                                                        type="date"
                                                        value={values?.endDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.endDate}
                                                        name="endDate"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Image</h6>
                                                    <CustomInputField
                                                        type="file"
                                                        onChange={handleChangeImage}
                                                        onBlur={handleBlur}
                                                        name="image"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/approval" type="submit" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateContext;
