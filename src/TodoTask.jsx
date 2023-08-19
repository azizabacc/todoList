import React, { useState } from 'react';

export const TodoTask = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  const [inputId] = useState(`input-${id}`); 
  return (
      <li>
        <label>
          <input
            id={inputId}
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="bg-hsl-0 border-2 border-hsl-0 text-hsl-0 py-1 px-2 rounded-md cursor-pointer outline-none transition duration-300 bg-indigo-500  hover:bg-sky-700 focus-visible:bg-sky-500">
          Delete
        </button>
      </li>
    )
  }