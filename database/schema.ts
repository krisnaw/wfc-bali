import {doublePrecision, integer, numeric, pgTable, text, varchar} from "drizzle-orm/pg-core";

export const cafes = pgTable("cafes", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    rating: numeric(),
    lat: doublePrecision(),
    lng: doublePrecision(),
    address: text(),
    feature_image_url: text(),
})

export const areas = pgTable("areas", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
})