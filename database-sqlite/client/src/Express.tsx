import axios from "axios";
import { useForm } from "react-hook-form";
import { Todos } from "./Todos";
import { useEffect, useState } from "react";

interface FormInputs {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export interface Todo {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export function Express() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const { register, handleSubmit, reset } = useForm<FormInputs>();

    const onSubmit = async (data: FormInputs) => {
        console.log(data);

        if (!data.id) {
            await axios.post("http://localhost:8080/todos", data);
        }

        await axios.put("http://localhost:8080/todos", data);
        await fetchTodos();
    };

    const onDelete = async (id: number) => {
        axios.delete(`http://localhost:8080/todos/${id}`);
        await fetchTodos();
    };

    const fetchTodos = async () => {
        const response = await axios.get("http://localhost:8080/todos");
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 1 }}>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" {...register("firstName")} type="text" />
                <br />

                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" {...register("lastName")} type="text" />
                <br />

                <label htmlFor="age">Age:</label>
                <input id="age" {...register("age", { valueAsNumber: true })} type="number" />
                <br />

                <button type="submit">Submit</button>
                <button onClick={() => reset({ id: 0, firstName: "", lastName: "", age: 0 })}>
                    Reset
                </button>
            </form>

            <div style={{ flex: 1 }}>
                <Todos todos={todos} reset={reset} onDelete={onDelete} />
            </div>
        </div>
    );
}
