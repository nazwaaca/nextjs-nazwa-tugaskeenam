'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export default function TodoCount() {
  const count = useSelector((state: RootState) => state.todo.todos);
  const doneCount = count.filter(count => count.done).length;


  return (
    <div className="flex items-center justify-center mb-2 text-sm text-gray-600 mt-4">
      Jumlah todo :  <span className="font-bold mx-4">{count.length} </span>  Selesai : <span className="font-bold mx-4">{doneCount} </span> Belum : <span className="font-bold mx-4">{count.length - doneCount} </span>
    </div>
  );
}