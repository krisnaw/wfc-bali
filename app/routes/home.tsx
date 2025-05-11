import {type Cafe, cafes} from "~/cafes";
import {SearchSkeleton} from "~/components/search/search-skeleton";
import type {Route} from "../../.react-router/types/app/routes/+types/search";
import CaffeItemVer from "~/components/caffe/caffe-item-ver";

export async function clientLoader() {
    return  cafes.map((item: Cafe) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        rating: item.rating,
        coordinates: item.coordinates,
        address: item.address,
        imageUrl: item.imageUrl
    }));
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return (
        <SearchSkeleton />
    );
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <CaffeItemVer caffe={loaderData as Cafe[]} />
        </div>
    )
}
