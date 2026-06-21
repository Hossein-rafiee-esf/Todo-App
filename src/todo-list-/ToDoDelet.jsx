import React, { useContext } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { NewContaxt } from './newContaxt'

// استفاده از export named
export const ToDoDelet = ({ todoId }) => {
  const { deleteTodo } = useContext(NewContaxt)
  
  return (
    <button
      onClick={() => deleteTodo(todoId)}
      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
      aria-label="Delete task"
    >
      <FiTrash2 size={18} />
    </button>
  )
}