import { useState } from "react";

import { BsPlusLg } from "react-icons/bs";

const InputForm = ({ handleSubmit }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(todo);
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center mt-2"
      >
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            className="max-w-md block w-full p-2 text-sm text-gray-900 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add your new Todo"
            required
          />
          <button
            type="submit"
            className="text-white font-bold bg-blue-700 hover:bg-blue-800 rounded text-sm px-4 py-2 outline-none"
          >
            <BsPlusLg />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
