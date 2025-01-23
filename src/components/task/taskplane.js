import React from "react";
import FilterTask from "./filtertask";
import TaskSummery from "./tasksummery";
export default function TaskPalne(){
    return(
        <div className="p-4">
            <div>
                <FilterTask />
            </div>
            <div className="mt-4">
                <TaskSummery />
            </div>
        </div>
    )
}