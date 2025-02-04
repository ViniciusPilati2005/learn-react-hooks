import { ListTodos } from "@/components/custom/list-todos";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState<string[]>([]);

  const addNewTodo = useCallback((newTodo: string) => {
    setAllTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  }, []);

  return (
    <div className="flex flex-1 justify-between gap-2 items-center px-10">
      <div className="flex flex-col flex-1">
        <p>Adicionar Tarefa</p>
        <input
          className="border-black w-96 p-2"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Insira a Todo"
        />
        <button
          className="bg-green-600 p-2 rounded-lg w-96"
          onClick={() => addNewTodo(todo)}
        >
          Add new
        </button>
      </div>

      <ListTodos allTodos={allTodos} addNewTodo={addNewTodo} />
    </div>
  );
}
