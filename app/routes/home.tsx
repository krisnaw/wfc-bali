import type {Route} from "./+types/home";
import {db} from "../../database/db";
import {areas, cafes} from "../../database/schema";
import CaffeList from "~/components/caffe/caffe-list";
import {AreasFilter} from "~/components/areas-filter";

export async function loader({request, params}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");

    const shops = await db.select().from(cafes);
    const locations = await db.select().from(areas);
    return {cafes: shops, areas: locations, q: query,};
}

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Work In Bali"},
        {name: "description", content: "Find the best Caffe fork & Coffee Shop"},
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {cafes, areas, q} = loaderData;
    return (
        <div>
            <div className="pb-6">
                <AreasFilter areas={areas}/>
            </div>

            <div className="h-screen overflow-y-auto">
                <CaffeList caffe={cafes}/>
            </div>
        </div>
    )
}
