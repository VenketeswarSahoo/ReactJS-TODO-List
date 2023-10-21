"use client";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = e => {
    e.preventDefault();

    setmainTask([...mainTask, { Title, desc }]);
    setTitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandeler = i => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No task available.</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li>
          <div className="my-task flex justify-between mx-2.5">
            <div className="task">
              <h3 className="text-2xl	font-semibold font-sans">
                {t.Title}
              </h3>
              <h4 className="text font-extralight	font-sans mb-5">
                {t.desc}
              </h4>
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  deleteHandeler(i);
                }}
                className="font-sans bg-red-400 hover:bg-red-800 shadow-lg space-y-3 text-slate-200 rounded-md border-none px-5 py-2 text-2xl font-normal"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter your title"
          value={Title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Description"
          value={desc}
          onChange={e => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  );
};

export default page;
