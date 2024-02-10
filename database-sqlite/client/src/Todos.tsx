import { UseFormReset } from "react-hook-form";
import { Todo } from "./Express";

interface Todos {
    todos: Todo[];
    reset: UseFormReset<Todo>;
    onDelete: (id: number) => void;
}

export function Todos({ todos, reset, onDelete }: Todos) {
    if (todos.length === 0) {
        return <b>No todos, add one!</b>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.firstName}</td>
                        <td>{todo.lastName}</td>
                        <td>{todo.age}</td>
                        <td>
                            <button onClick={() => reset(todo)}>Update</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => onDelete(todo.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
