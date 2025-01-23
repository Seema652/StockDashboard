import ViewAgentTable from "../../components/agent/viewAgentCom/ViewAgentTable";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import LookIn from "../../components/rems-status/LookIn";
import PSMunit from "../../components/rems-status/PSMunit";
import StanderLayout from "../../components/rems-status/StanderLayout";

export default function ViewAgent() {
  return (
    <div className="card">
      <PSMunit title={"Agent List"} />
      <LookIn />
      <StanderLayout link={"/newventures"} title={"New Agent"} />
      <AlphabeticFilter />
      <ViewAgentTable />
    </div>
  );
}
