import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// export با نام NewContaxt (با N بزرگ)
export const NewContaxt = createContext();

export function AddAppProvider({ children }) {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem('todo');
    return saved ? JSON.parse(saved) : [];
  });

  function toggleTodo(id) {
    setTodo(prev => prev.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    ));
  }

  function addTodo(event) {
    if (event.key === 'Enter' && event.target.value.trim()) {
      const newTodo = {
        id: uuidv4(),
        name: event.target.value.trim(),
        status: false
      };
      setTodo(prev => [...prev, newTodo]);
      event.target.value = '';
    }
  }

  function deleteTodo(id) {
    setTodo(prev => prev.filter(item => item.id !== id));
  }

  function editTodo(id, newName) {
    if (newName.trim()) {
      setTodo(prev => prev.map(item =>
        item.id === id ? { ...item, name: newName.trim() } : item
      ));
    }
  }

  return (
    <NewContaxt.Provider value={{ todo, toggleTodo, addTodo, deleteTodo, editTodo }}>
      {children}
    </NewContaxt.Provider>
  );
}