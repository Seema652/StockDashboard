import React, { useState } from "react";

function TenantForm() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [owner, setOwner] = useState("Owner");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSave = () => {
    console.log("Agent saved:", { name, code, owner });
  };

  const handleSaveNew = () => {
    handleSave();
    setName("");
    setCode("");
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSavePrint = () => {
    handleSave();
    window.print();
    setDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>New Tenant</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {/* Professional Save button with dropdown */}
        <button
          type="button"
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px 0 0 5px", // Rounded left side
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Save
        </button>
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={toggleDropdown}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "0 5px 5px 0", // Rounded right side
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            ▼
          </button>
          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                display: "flex",
                flexDirection: "column",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                marginTop: "5px",
                zIndex: 1,
              }}
            >
              <button
                type="button"
                onClick={handleSaveNew}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f8f9fa",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#e2e6ea")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
              >
                Save & New
              </button>
              <button
                type="button"
                onClick={handleSavePrint}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f8f9fa",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#e2e6ea")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
              >
                Save & Print
              </button>
            </div>
          )}
        </div>
      </div>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ display: "block", width: "100%", padding: "5px" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Code:
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ display: "block", width: "100%", padding: "5px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Owner:
            <select
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              style={{ display: "block", width: "100%", padding: "5px" }}
            >
              <option value="Dharani">Dharani</option>
              {/* Add other options here if needed */}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default TenantForm;
