import {db} from "./db";
import {areas} from "./schema";
import {asc} from "drizzle-orm";

export async function getAreas(){
    return db.select().from(areas).orderBy(asc(areas.name));
}