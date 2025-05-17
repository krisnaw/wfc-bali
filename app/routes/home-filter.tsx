import type {Route} from "./+types/home-filter";
import {db} from "../../database/db";
import {areas, cafes} from "../../database/schema";
import CaffeList from "~/components/caffe/caffe-list";
import {eq} from "drizzle-orm";
import {AreasFilter} from "~/components/areas-filter";

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
    console.log(path);
    return [
        { title: `Best coffee shop in ${path.name}` },
        { name: "description", content: "Find the best Caffe fork & Coffee Shop" },
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {cafes, areas, path, q} = loaderData;
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Best caffe and coffee shop in {path.name}
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        My personal list of place to work in cafe or just wanted to enjoy speciality coffee in Bali.
                    </p>
                </div>
                <AreasFilter areas={areas} />
                <div>
                    <CaffeList caffe={cafes}/>
                </div>
            </div>
        </div>
    )
}
