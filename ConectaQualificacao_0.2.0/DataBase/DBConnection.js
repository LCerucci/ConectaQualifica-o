import dotenv from 'dotenv';
import pool from 'mysql2/promise';

dotenv.config();

export const connectionPool = pool.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});