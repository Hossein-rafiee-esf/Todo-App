// TodoList.jsx
import React from 'react'
import { TodoItem } from './TodoItem'

const TodoList = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul className="space-y-2">
      {todo.map((item, index) => (
        <TodoItem
          key={item.id}
          todo={item}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          index={index}
        />
      ))}
    </ul>
  )
}

export default TodoList