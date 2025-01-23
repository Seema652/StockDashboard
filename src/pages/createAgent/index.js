import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import FormCompaigs from "../../components/rems-status/FormCompaigs";
import CreateAgentForm from "../../components/agent/createAgentCom/CreateAgentForm";

const CreateAgent = () => {
  return (
    <div>
      {" "}
      <PSMunit title={"New Campaign"} />
      <CreateAgentForm />  
    </div>
  );
};

export default CreateAgent;
