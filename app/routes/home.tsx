import {type Cafe, cafes} from "~/cafes";
import CaffeItemVer from "~/components/caffe/caffe-item-ver";
import type {Route} from "./+types/home";

export async function loader({request}: Route.LoaderArgs): Promise<{ items: Cafe[]; q: string | null; }> {
    const url = new URL(request.url);
    const param =  url.searchParams.get("q");
    return {items: cafes, q: param};
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {items, q} = loaderData;
    const filteredItems = q
        ? items.filter((item) => item.area.toLowerCase().includes(q.toLowerCase()))
        : items;
    return (
        <div>
            <CaffeItemVer caffe={filteredItems as Cafe[]}/>
        </div>
    )
}
