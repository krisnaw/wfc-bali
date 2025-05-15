import type {Route} from "./+types/index";
import {db} from "../../../database/db";
import {cafes} from "../../../database/schema";
import CafesList from "~/components/caffe/cafes-list";

export async function loader({request}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const param = url.searchParams.get("q");

    const shops = await db.select().from(cafes);
    return {cafes: shops, q: param};
}

export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function Index({loaderData}: Route.ComponentProps) {
    const {cafes, q} = loaderData;
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <CafesList cafes={cafes}/>
        </div>
    )
}