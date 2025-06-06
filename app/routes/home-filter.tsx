import type {Route} from "./+types/home-filter";
import {db} from "../../database/db";
import {areas, cafes} from "../../database/schema";
import CaffeList from "~/components/caffe/caffe-list";
import {eq} from "drizzle-orm";
import * as React from "react";

export async function loader({request, params}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    const path = params

    const locations = await db.select().from(areas);
    const find = locations.filter(location => location.name == path.name)
    const shops = await db.select().from(cafes).where(eq(cafes.area_id, find[0].id))
    return {cafes: shops, areas: locations, path, q: query };
}

export function meta({data}: Route.MetaArgs) {
    const {path} = data;
    return [
        { title: `Best coffee shop in ${path.name}` },
        { name: "description", content: "Find the best Caffe fork & Coffee Shop" },
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {cafes, areas, path, q} = loaderData;

    if (!cafes || cafes.length === 0) {
        return (
            <div>
                <h1 className="text-2xl font-bold text-center mt-4">No cafes found</h1>
                <p className="text-center mt-2">Please change the filter.</p>
            </div>
        )
    }

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <CaffeList caffe={cafes}/>
            </React.Suspense>
        </div>
    )
}
