import { existsSync } from "fs";
import sqlite3 from "sqlite3";

const databaseFilePath = "./db/todos.db";

function createDbConnection() {
    if (existsSync(databaseFilePath)) {
        const db = new sqlite3.Database(databaseFilePath);
        insertData(db);
        return db;
    } else {
        const db = new sqlite3.Database(databaseFilePath, (err) => {
            if (err) {
                console.error(err);
            }

            createTable(db);
            insertData(db);
        });
        console.log("Connected to todos.db");
        return db;
    }
}

const insertData = (db: sqlite3.Database) => {
    const sql = "SELECT * FROM todos";
    db.all(sql, [], (err, rows) => {
        if (rows.length === 0) {
            db.run(
                `INSERT INTO todos (firstName, lastName, age) VALUES (?,?,?)`,
                ["Noah", "Roerig", "22"],
                (err) => {
                    if (err) throw err;
                    console.log("Dummy data inserted");
                }
            );
        }
    });
};

const createTable = (db: sqlite3.Database) => {
    db.exec(`
        CREATE TABLE todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(50) NOT NULL,
            age INTEGER NOT NULL
        )
    `);
};
export default createDbConnection;
