import { ChangeEvent, useState } from "react";

interface todos {
    firstName?: string;
    lastName?: string;
    age?: number;
}

export function React() {
    const [todos, setTodos] = useState<todos[]>([]);

    const [todo, setTodo] = useState<todos>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleAdd = () => {
        setTodos([...todos, {age: todo?.age, firstName: todo?.firstName, lastName: todo?.lastName}])
    }

    return (
        <div>
            <h3>Current Todos</h3>
            <div>
                {todos?.map((todo) => (
                    <div>
                        <span>{todo.firstName}</span>
                        <span>{todo.lastName}</span>
                        <span>{todo.age}</span>
                    </div>
                ))}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter Your First Name"
                    onChange={handleInputChange}
                    name="firstName"
                /> 
                <br />

                <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    onChange={handleInputChange}
                    name="lastName"
                />
                <br />

                <input
                    type="number"
                    placeholder="Enter Your Age"
                    onChange={handleInputChange}
                    name="age"
                />

                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}
