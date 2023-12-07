import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

/* const initialStateTodos = [
  { id: 1, title: "Complete online Javascript Curse", completed: true },
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "10 Minutes Meditation", completed: true },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Complete Todo App On Frontend Mentor", completed: false },
] */

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.id++,
      title: title.trim(),
      completed: false,
    }

    setTodos([...todos, newTodo]);
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <div
      className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
      transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
      md:dark:bg-[url('./assets/images/bg-desktop-light.jpg')] ">

      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        {/* TodoList (TodoItem) TodoUpdate y TodoDelete */}
        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <footer className="mt-8 text-center dark:text-gray-400 transition-all duration-1000">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;
