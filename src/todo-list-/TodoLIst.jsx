import React, { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { NewContaxt } from './newContaxt'  // NewContaxt با N بزرگ

const TodoList = () => {
  const { todo } = useContext(NewContaxt)  // NewContaxt با N بزرگ
  return (
    <ul className="space-y-2">
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
        />
      ))}
    </ul>
  )
}

export default TodoList