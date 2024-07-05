import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

function SendMail() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const dispatch = useDispatch();
  const open = useSelector((store) => store.appSlice.open);
  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer "
        >
          <RxCross2 size="20px" />
        </div>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          onChange={changeHandeler}
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          onChange={changeHandeler}
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changeHandeler}
          value={formData.message}
          name="message"
          id=""
          cols={"30"}
          rows={"10"}
          className="outline-none py-1 "
        ></textarea>
        <button className="rounded-full w-fit px-6 bg-blue-700 text-white font-medium bg=[#0857D0]">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail;
