import { existsSync } from "fs";
import sqlite3 from "sqlite3";
import { createTable } from "./createTable";
import { AsyncDatabase } from "promised-sqlite3";
import { insertData } from "./insertDummyData";

const databaseFilePath = "./data/db/todos.db";

export function createDbConnection() {
    if (existsSync(databaseFilePath)) {
        const db = new sqlite3.Database(databaseFilePath);
        return db;
    } else {
        const db = new sqlite3.Database(databaseFilePath, (err) => {
            if (err) {
                console.error(err);
            }

            createTable(db);
            insertData(db)
            console.log("Connected to todos.db");
        });
        return db;
    }
}

export async function createAsyncDbConnection() {
    try {
        if (existsSync(databaseFilePath)) {
            const database = await AsyncDatabase.open(databaseFilePath);
            console.log("Connected to todos.db");

            return database;
        } else {
            new sqlite3.Database(databaseFilePath, (err) => {
                if (err) {
                    console.error(err);
                }
            });

            const database = await AsyncDatabase.open(databaseFilePath);
            createTable(database);
            insertData(database)

            console.log("Connected to todos.db");
            return database;
        }
    } catch (error) {
        console.error("Error connecting to database");
    }
}




