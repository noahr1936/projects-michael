import express, { Request } from "express";
import cors from "cors";
const app = express();

import { getAllTodosPromise } from "./data/dataLayer";
import { APITodo, ExtendedAPITodo } from "./data/dto/dto";

const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/todos", async (req, res) => {
    const results = await getAllTodosPromise();
    return res.status(200).json(results);
});

app.post("/todos", (req: Request<{}, {}, APITodo>, res) => {
    console.log(req.body);

    // add to database
});

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);

    // delete using primary key
});

app.put("/todos", (req: Request<{}, {}, ExtendedAPITodo>, res) => {
    const { id } = req.body;

    // update using the id
});

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
