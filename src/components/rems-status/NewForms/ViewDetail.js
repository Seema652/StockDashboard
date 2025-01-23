import React from "react";

export default function ViewDetails(){
    return(
        <div className="p-2 bg-light">
            <div className="row mt-2">
                <div className="col-6">
                    <h1 className="fs-6 text-black">SkyHouse Phase II</h1>
                    <table>
                        <tr>
                            <td className="fs-6 text-black">Construction Status:</td>
                            <td className="fs-6 ">Under Construction</td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">Construction Start Date:</td>
                            <td>01/12/2019 17:21:00</td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">Construction End Date:	</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">SkyHouse</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">Rate:	</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="col-6">
                    <table>
                    <tr>
                        <td className="fs-6 text-black">Location :	</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">CreateBy :	</td>
                            <td>Dharani</td>
                        </tr>
                        <tr>
                            <td className="fs-6 text-black">Created Date:	</td>
                            <td>28/03/2023</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
} 