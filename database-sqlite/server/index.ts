import express, { Request } from "express";
import createDbConnection from "./db/database";
import cors from "cors";
const app = express();

const port = 8080;

const db = createDbConnection();

/** No more in memory database */
// const todos = [
//     {
//         firstName: "Noah",
//         lastName: "Roerig",
//         age: 22
//     }
// ]

/**
 * Database example
 *
 * -----------------------------------
 * | id | firstName | lastName | age |
 * -----------------------------------
 * | 1  | Noah      | Roerig   | 22  |
 * | .. | ...       | ...      | ..  |
 */

interface Todo {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/todos", (req, res) => {
    const sql = "SELECT * FROM todos ORDER BY firstName";

    db.all<Todo>(sql, [], (err, rows) => {
        if (err) throw err;

        res.status(200).json(rows);
    });
});

app.post("/todos", (req: Request<{}, {}, Todo>, res) => {
    console.log(req.body.firstName);

    // add to database
});

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    // delete using primary key
});

app.put("/todos", (req: Request<{}, {}, Todo>, res) => {
    const { firstName, lastName, age, id } = req.body;
});

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
