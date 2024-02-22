import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-10 text-lg">
        Welcome! We're thrilled to have you here! <br /> Please start by telling
        us your name:
      </p>
      <div className="flex space-x-12  h-16">
        <div className="w-72">
          {/* Username input */}
          <div className="relative w-full min-w-[200px] h-10">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 text-lg disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent  px-3 py-7 rounded-[7px] border-slate-900 focus:border-gray-900"
              placeholder=" "
              required
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-400 peer-focus:before:!border-gray-900 after:border-blue-gray-400 peer-focus:after:!border-gray-900">
              Your name
            </label>
          </div>
        </div>

        {username.length > 2 && (
          <div>
            <Button>Start orderding</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
