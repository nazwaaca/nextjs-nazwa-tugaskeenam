'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../../store/todoSlice';
import type { RootState, AppDispatch } from '../../store/store';
import { Card } from '@/components/ui/card';
import { Sparkles, SmilePlus } from 'lucide-react';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();
  if (todos.length === 0) {
    return (
      <div className="text-center mt-4 text-muted-foreground flex flex-col items-center gap-2">
        <SmilePlus className="w-8 h-8 text-pink-400 animate-bounce" />
        <p className="italic text-sm my-2">Belum ada todo hari ini 🎉</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-4">
      {todos.map((todo, idx) => (
        <Card
          key={idx}
          className="flex items-center justify-between px-4 py-2 shadow-md hover:shadow-lg transition duration-200 border-1-6 border-pink-500 cursor-pointer ${
            todo.done ? 'line-through text-gray-400' : ''}"
        >
          <div className="flex items-center gap-2">
          <Sparkles className="text-pink-400 w-4 h-4" />
            <span className={todo.done ? 'line-through text-gray-400' : 'text-pink-900 text-medium'}>{todo.text}</span>
          </div>
          <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(idx))}
                className="accent-pink-500 rounded-xl"
          />   
        </Card>
      ))}
    </div>
  );
}
