import React from "react";
import { BiSolidFileJson } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomizeFieldsRules() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">
          Rules
          <div>
            {" "}
            <Link
              className="btn btn-primary btn-sm"
              to="/rule"
              role="button"
              style={{ marginRight: "1px", alignItems: "center" }} // 1px margin-right for small gap
            >
              New
            </Link>
            <Link
              className="btn btn-primary btn-sm"
              to=""
              role="button"
              style={{ alignItems: "center" }} // no margin needed here
            >
              Clone Rule
            </Link>
          </div>
        </h2>

        {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                    </button> */}
      </div>
      <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1"></th>
            <th className="p-1"> </th>
            <th className="p-1">Actions</th>
            <th className="p-1"></th>
            <th className="p-1">Rules</th>
            <th className="p-1">Apply on</th>
            <th className="p-1">Delete</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CustomizeFieldsRules;
