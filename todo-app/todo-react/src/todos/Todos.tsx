import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import { AddTodo } from "./AddTodo";
import { useState } from "react";
import { Todo } from "./Todo";

export interface ITodo {
    id?: number;
    task: string;
    note: string;
    completed: boolean;
}

export function Todos() {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            note: "Some cool notes",
            completed: false,
            task: "My First Task",
        },
    ]);
    console.log("here", todos);

    return (
        <div css={{ backgroundColor: "#faf9f8", width: "100%", padding: 30, flex: 1 }}>
            <h2 css={{ marginBottom: 30 }}>
                <HomeOutlinedIcon /> <span>Tasks</span>
            </h2>

            {/* <AddTodo /> */}

            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}
