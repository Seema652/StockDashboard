import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postCallConvertStatus, updateCallConvertStatusById, getCallConvertStatusById } from '../../../../../api/login/Login';

function CreateTypemarket() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Market Type",
    };

    const [initialValues, setInitialValues] = useState({
        status: "",
        contest_type: '',
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.status) {
            errors.status = "Banner Status is required";
        }
        if (!values.image) {
            errors.image = "Banner Image is required";
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
        formData.append("status", values.status);
        if (values.image) {
            formData.append("image", values.image);
        }

        try {
            if (!params?.id) {
                // POST request to create a new banner
                const res = await postCallConvertStatus(formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Banner added successfully");
                    navigate(`/banner-list`);
                }
            } else {
                // PUT request to update an existing banner
                const res = await updateCallConvertStatusById(params.id, formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Banner updated successfully");
                    navigate(`/banner-list`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchBannerData = async () => {
            if (params?.id) {
                const response = await getCallConvertStatusById(params.id);
                setInitialValues({
                    status: response?.data?.status || "",
                    image: null, // Image will be uploaded again
                });
            }
        };

        fetchBannerData();
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
                                    {params?.id ? "UPDATE" : "ADD"} Market Type
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
                                                    <h6>Market Type</h6>
                                                    <CustomInputField 
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.market_type}
                                                        onChange={handleChange}
                                                        name="market_type"
                                                    />
                                                    {touched.image && errors.image && (
                                                        <div className="text-danger">{errors.image}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Contest Type Status</h6>
                                                    <select
                                                        className="form-select"
                                                        name="status"
                                                        value={values.status}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Status</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                    {touched.status && errors.status && (
                                                        <div className="text-danger">{errors.status}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/banner-list" className="btn btn-danger light ms-1">Cancel</Link>
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

export default CreateTypemarket;
