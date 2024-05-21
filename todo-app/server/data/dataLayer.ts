import { createAsyncDbConnection, createDbConnection } from "./db/createConnection";
import { DatabaseTodo } from "./dto/dto";

const db = createDbConnection();

export const getAllTodos = (callback: (rows: DatabaseTodo[]) => void) => {
    const sql = "SELECT * FROM todos";
    const t = db.all<DatabaseTodo>(sql, (err, rows) => {
        if (err) {
            console.error(err);
            callback([]);
        } else {
            callback(rows);
        }
    });
};

export const getAllTodosPromise = async (): Promise<DatabaseTodo[]> => {
    const sql = "SELECT * FROM todos";
    const db = await createAsyncDbConnection();

    try {
        const rows = await db?.all<DatabaseTodo>(sql);
        return rows ?? [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const deleteTodo = () => {};
const updateTodo = () => {};
