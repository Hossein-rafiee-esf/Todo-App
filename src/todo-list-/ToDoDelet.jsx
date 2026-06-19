import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

export const ToDoDelet = ({ deleteTodo, todo }) => {
  return (
    <button
      onClick={() => deleteTodo(todo.id)}
      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
      aria-label="Delete task"
    >
      <FiTrash2 size={18} />
    </button>
  )
}