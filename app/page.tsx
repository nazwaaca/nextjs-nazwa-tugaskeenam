import TodoCount from './components/TodoCount';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function HomePage() {
  return (
    <main className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <div className='flex items-center justify-center'>
        <h1 className="font-bold text-lg text-pink-500">Todo List</h1>
      </div>
      <TodoForm />
      <TodoList />
      <TodoCount/>
    </main>
  );
}