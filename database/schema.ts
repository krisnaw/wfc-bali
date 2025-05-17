import {doublePrecision, integer, numeric, pgTable, text, varchar} from "drizzle-orm/pg-core";
import type {InferSelectModel} from "drizzle-orm";

export const cafes = pgTable("cafes", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    slug: text(),
    description: text(),
    rating: numeric(),
    lat: doublePrecision(),
    lng: doublePrecision(),
    address: text(),
    area_id: integer().references(() => areas.id),
    feature_image_url: text(),
})

export const areas = pgTable("areas", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull().unique()
})

export type CafesModel = InferSelectModel<typeof cafes>
export type AreasModel = InferSelectModel<typeof areas>