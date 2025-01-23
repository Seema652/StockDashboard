import React from "react";
import CreateBrokersForm from "../../components/brokers/createBrokersForm/CreateBrokersForm";
import PSMunit from "../../components/rems-status/PSMunit";

const CreateBrokers = () => {
  return (
    <div className="card m-3">
      <PSMunit title="New Brokers" />
      <CreateBrokersForm />
    </div>
  );
};

export default CreateBrokers;
