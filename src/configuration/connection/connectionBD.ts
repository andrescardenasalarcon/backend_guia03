import pgPromise from "pg-promise";
import { optionPG } from "./optionsConnection";
import variablesConnect from '../domeins/info_basedatos';
import dotenv from "dotenv";
dotenv.config({ path: 'variables.env' });
const pgp = pgPromise(optionPG);
const dbConfig = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: Number(process.env.port),
    //ssl: true
};
const pool = pgp(dbConfig);



pool.connect()
    .then((conn) => {
        console.log("Connection to: ", dbConfig.database);
        conn.done();
    })
    .catch((err) => {
        throw new Error(err);
    })
export default pool;