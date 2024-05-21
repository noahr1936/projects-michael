import { AsyncDatabase } from "promised-sqlite3";
import sqlite3 from "sqlite3";

/**
 * Can be modified to add more fields to the table
 */
export const createTable = (db: sqlite3.Database | AsyncDatabase) => {
    db.exec(`
        CREATE TABLE todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            note TEXT,
            completed INTEGER NOT NULL
        )
    `);
};
