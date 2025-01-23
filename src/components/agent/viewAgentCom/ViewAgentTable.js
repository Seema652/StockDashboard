import { Link } from "react-router-dom";

const agents = [
  { name: "Dosti Group", code: "DG" },
  { name: "Dosti Group", code: "DG" },
  { name: "Dosti Group", code: "DG" },
];

export default function ViewAgentTable() {
  return (
    <div className="mt-3">
      <table className="w-100">
        <thead>
          <tr className="p-1 bg-light">
            <th className="p-1">
              <input type="checkbox" />
            </th>
            <th className="p-1">Action</th>
            <th className="p-1">Name</th>
            <th className="p-1">Code</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index} className="border p-1">
              <td className="p-1">
                <input type="checkbox" />
              </td>
              <td className="p-1">
                <div className="d-flex gap-2">
                  <Link to={`/edit/${index}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link to={`/delete/${index}`}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </Link>
                </div>
              </td>
              <td className="p-1">{agent.name}</td>
              <td className="p-1">{agent.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
