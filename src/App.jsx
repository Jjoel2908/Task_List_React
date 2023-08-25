import './App.css'
import Header from './components/Header'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { useTodo } from './hooks/useTodo'

function App() {

  const { 
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleUpdateTodo} = useTodo();

  return (
    <>
    <div className="card-to-do">
      <Header todosCount={todosCount}
              pendingTodos={pendingTodos} />

      <TodoAdd handleNewTodo={handleNewTodo} />

      <TodoList todos={todos}
                handleCompleteTodo={handleCompleteTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleUpdateTodo={handleUpdateTodo} />
    </div>
    </>
  )
}

export default App
