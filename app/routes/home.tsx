import type {Route} from "./+types/home";
import {db} from "../../database/db";
import {cafes} from "../../database/schema";
import CaffeList from "~/components/caffe/caffe-list";

export async function loader({request}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const param = url.searchParams.get("q");

    const shops = await db.select().from(cafes);
    return {cafes: shops, q: param};
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Work In Bali" },
        { name: "description", content: "Find the best Caffe fork & Coffee Shop" },
    ];
}


export default function Home({loaderData}: Route.ComponentProps) {
    const {cafes, q} = loaderData;
    return (
        <div className="bg-white py-24 sm:py-32">
            {/*<ItemList />*/}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Find the best caffe to work or best speciality coffee shop
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        My personal list of place to work in cafe or just wanted to enjoy speciality coffee in Bali.
                    </p>
                </div>
                <div>
                    <CaffeList caffe={cafes}/>
                </div>
            </div>
        </div>
    )
}
