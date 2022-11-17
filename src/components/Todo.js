import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/slices/todoSlice";

import InputForm from "./InputForm";
import TodoDetail from "./TodoDetail";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);

  //   add
  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  //   Delete
  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <section className="w-full md:w-6/12 bg-slate-200 p-4 rounded">
        <h1 className="text-2xl font-bold text-center">Todo App</h1>
        <InputForm handleSubmit={handleAdd} />
        {/* Todos */}
        <section className="flex flex-col items-center mt-2">
          {todos?.map((todo) => (
            <TodoDetail key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Todo;
