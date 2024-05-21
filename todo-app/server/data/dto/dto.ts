export interface DatabaseTodo {
    id?: number;
    task: string;
    note: string;
    completed: number;

    //     /** Possible additions */
    //     // dueDate
    //     // dateCreated
    //     // dateCompleted
    //     // steps
}

export interface APITodo {
    task: string;
    note: string;
    completed: boolean;
}

export interface ExtendedAPITodo extends APITodo {
    id?: number;
}

export const toDatabaseTodo = (todo: ExtendedAPITodo): DatabaseTodo => {
    return {
        id: todo?.id,
        task: todo.task,
        note: todo.note,
        completed: todo.completed ? 1 : 0,
    };
};

export const toAPITodo = (todo: DatabaseTodo): APITodo => {
    return {
        /**
         * a different way of doing toDatabaseTodo()
         *
         * we spread(...) everything except the completed variable because we
         * know they're the same type
         */
        ...todo,
        completed: todo.completed === 1 ? true : false,
    };
};
