import { AsyncDatabase } from "promised-sqlite3";
import sqlite3 from "sqlite3";

export const insertData = (db: AsyncDatabase | sqlite3.Database) => {
    const sql = "SELECT * FROM todos";
    db.all<any>(sql, [], (_, rows: any) => {        
        if (rows.length === 0) {
            db.run(
                `INSERT INTO todos (task, note, completed) VALUES (?,?,?)`,
                ["My First Task", "Some optional notes. These aren't required in the database", 0],
                (err: any) => {
                    if (err) throw err;
                    console.log("Dummy data inserted");
                }
            );
        }
    });
}