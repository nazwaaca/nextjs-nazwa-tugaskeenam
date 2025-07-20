'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import type { AppDispatch } from '../../store/store';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 mt-4">
      <Input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Tambah todo baru"
        className="border px-2 py-1 rounded"
      />
      <Button type="submit" className=" bg-pink-500 text-white px-3 py-1 rounded">
        Tambah
      </Button>
    </form>
  );
}