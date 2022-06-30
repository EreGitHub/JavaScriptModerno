import './styles.css';
import { Todo, TodoList } from './classes';

const todoList = new TodoList();
const tarea1 = new Todo('Aprender JavaScript');
const tarea2 = new Todo('comprar pc');
todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);
console.log(todoList);