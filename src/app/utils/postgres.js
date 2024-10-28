import {pool} from "pg"
import { database, password, port, user } from "pg/lib/defaults"

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB.HOST,
    database: process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
});
export default pool