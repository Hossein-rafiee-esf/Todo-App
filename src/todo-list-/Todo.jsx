// Todo.jsx
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem('todo')
    return saved ? JSON.parse(saved) : []
  })

  function toggleTodo(id) {
    setTodo(prev => prev.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    ))
  }

  function addTodo(event) {
    if (event.key === 'Enter' && event.target.value.trim()) {
      const newTodo = {
        id: uuidv4(),
        name: event.target.value.trim(),
        status: false
      }
      setTodo(prev => [...prev, newTodo])
      event.target.value = ''
    }
  }

  function deleteTodo(id) {
    setTodo(prev => prev.filter(item => item.id !== id))
  }

  function editTodo(id, newName) {
    if (newName.trim()) {
      setTodo(prev => prev.map(item =>
        item.id === id ? { ...item, name: newName.trim() } : item
      ))
    }
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transition-all">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TO-DO
            </h1>
            <span className="text-sm text-gray-400 font-medium">Hossein Rafiee Academy</span>
          </div>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Add a new task..."
              className="w-full px-5 py-4 pr-12 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
              onKeyDown={addTodo}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">⌨</span>
          </div>

          <TodoList
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
          
          {todo.length === 0 && (
            <p className="text-center text-gray-400 py-8 text-sm">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}