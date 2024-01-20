import pgPromise from "pg-promise";
import { IClient, camelizeColumns } from "./functionConnection";

export const optionPG: pgPromise.IInitOptions<IClient> = {
    receive(e) { camelizeColumns(e.data); }
};