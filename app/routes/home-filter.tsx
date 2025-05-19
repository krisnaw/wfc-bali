import type {Route} from "./+types/home-filter";
import {db} from "../../database/db";
import {areas, cafes} from "../../database/schema";
import CaffeList from "~/components/caffe/caffe-list";
import {eq} from "drizzle-orm";

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
    return (
        <div>
            <CaffeList caffe={cafes}/>
        </div>
    )
}
