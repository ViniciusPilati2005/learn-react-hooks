import { useEffect } from "react";

interface ListTodosProps {
  allTodos: string[];
  addNewTodo: (newTodo: string) => void;
}

export function ListTodos({ allTodos, addNewTodo }: ListTodosProps) {
  useEffect(() => {
    console.log("função criada do zero");
  }, [addNewTodo]);

  return (
    <ul>
      {allTodos.map((todo, index) => (
        <li key={index} className="text-md">
          {todo}
        </li>
      ))}
    </ul>
  );
}
