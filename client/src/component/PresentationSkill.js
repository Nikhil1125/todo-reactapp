import React, {useEffect, useState } from "react";
import Axios from "axios";
export default function PresentationSkill() {
  const [uname, setUName] = useState("");
  const [task, setTaskName] = useState("");
  const [unameList, setunameList] = useState([]);
  const [newtask, setNewTask] = useState("");

   useEffect(() => {
     Axios.get("http://localhost:3001/api/getpresentation").then((response) => {
       setunameList(response.data);
     });
   }, []);
  const submitTask = () => {
    Axios.post("http://localhost:3001/api/presentation", {
      uname: uname,
      task: task,
    })
      setunameList([
      ...unameList,{
        uname:uname,task:task
      },
    ]);
  };
   const deletePresentation = (task) => {
     Axios.delete(`http://localhost:3001/api/deletepresentation/${task}`);
   };
    const updatePresentation = (uname) => {
      Axios.put("http://localhost:3001/api/updatepresentation", {
        uname: uname,
        task: newtask,
      });
      setNewTask("");
    };

  return (
    <div className="todo">
      <h2>Presentation Skill</h2>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
         TO DO Heading
        </label>
        <input
          type="text"
          className="form-control"
          name="uname"
          id="exampleFormControlInput1"
          placeholder="My presentation"
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter your Task details
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          name="task"
          placeholder="describe the skills for todo"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={submitTask}
        >
          Add task
        </button>
      </div>
       {unameList.map((val) => {
        return (
          <div className="card">
            <h3>{val.uname}</h3>
            <p> {val.task}</p>
            <button
              className="mybtn"
              onClick={() => {
                deletePresentation(val.task);
              }}
              key={"item1"}
            >
              Delete
            </button>
            <input
              type="text"
              id="updateinput"
              placeholder="updated task"
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
            />
            <button
              className="mybtn"
              key={"item2"}
              onClick={() => {
                updatePresentation(val.uname);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}
