import React from 'react'
import { FiEdit2 } from 'react-icons/fi'

export const ToDoEditore = ({ setIsEditing }) => {
  return (
    <button
      onClick={() => setIsEditing(true)}
      className="p-2 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
      aria-label="Edit task"
    >
      <FiEdit2 size={18} />
    </button>
  )
}