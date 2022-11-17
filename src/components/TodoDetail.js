import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/slices/todoSlice";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";

const TodoDetail = ({ todo, handleDelete }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);

  // Edit
  const handleEdit = (td) => {
    setData({ ...td });
    setToggle(true);
  };

  // Change
  const handleChange = (e) => {
    const old = data;
    old.title = e.target.value;
    setData({ ...old });
  };

  // Save
  const handleSave = () => {
    dispatch(updateTodo(data));
    setToggle(false);
  };

  return (
    <>
      {todo.id === data.id && toggle ? (
        <div className="w-full flex items-center mt-1">
          <input
            type="text"
            className="w-full p-2 bg-white rounded outline-none"
            value={data.title}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-white rounded text-sm font-semibold p-2 px-3 ml-1"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="w-full flex items-center mt-1">
          <div className="w-full p-2 bg-white rounded">
            <p className="rounded">{todo?.title}</p>
          </div>
          <span
            className="text-xl text-blue-500 p-1 cursor-pointer"
            onClick={() => handleEdit(todo)}
          >
            <BiEditAlt />
          </span>
          <span
            className="text-xl text-red-500 p-1 cursor-pointer"
            onClick={() => handleDelete(todo)}
          >
            <RiDeleteBin6Fill />
          </span>
        </div>
      )}
    </>
  );
};

export default TodoDetail;
