import express from "express";
const app = express();

const port = 8080;

const todos = [
    {
        firstName: "Noah",
        lastName: "Roerig",
        age: 22
    }
]

app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

app.get("/todos", (req,res) => {
    // return todos
})

app.post("/todos", (req,res) => {
    console.log(req.body);    

    // add to todos list
})

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})