import React, { useState, useRef, useEffect, useContext } from 'react'
import ToDoEditore from './ToDoEditore'  // بدون {}
import ToDoDelet from './ToDoDelet'      // بدون {}
import { NewContaxt } from './newContaxt'

export const TodoItem = ({ todo }) => {
  const { editTodo, toggleTodo, deleteTodo } = useContext(NewContaxt)
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  function handleEditSubmit() {
    if (editValue.trim()) {
      editTodo(todo.id, editValue)
      setIsEditing(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleEditSubmit()
    } else if (e.key === 'Escape') {
      setEditValue(todo.name)
      setIsEditing(false)
    }
  }

  return (
    <li className="group flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200">
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 rounded-lg border-2 border-gray-300 text-blue-500 focus:ring-blue-400 focus:ring-2 cursor-pointer transition-all"
      />

      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleEditSubmit}
          className="flex-1 px-3 py-1.5 bg-blue-50 border-2 border-blue-400 rounded-lg outline-none text-gray-700 font-medium"
        />
      ) : (
        <span className={`flex-1 text-gray-700 font-medium ${todo.status ? 'line-through text-gray-400' : ''}`}>
          {todo.name}
        </span>
      )}

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ToDoEditore setIsEditing={setIsEditing} />
        <ToDoDelet todoId={todo.id} />
      </div>
    </li>
  )
}