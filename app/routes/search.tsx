import type {Route} from "./+types/search";
import {MainMaps} from "~/components/main-maps";
import {SearchSkeleton} from "~/components/search/search-skeleton";
import {cafes} from "~/cafes";
import CaffeList from "~/components/caffe/caffe-list";

export interface Cafe {
    id: number;
    name: string;
    description: string;
    rating: number;
    coordinates: {
        lat: number;
        lng: number;
    };
    address: string;
    imageUrl: string;
}

export async function clientLoader() {
    return cafes.map((item) => ({
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

export default function Search({loaderData}: Route.ComponentProps) {
    console.log(loaderData);
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    <CaffeList caffe={loaderData} />
                </div>
                <div className="col-span-3 h-screen">
                    <MainMaps />
                </div>
            </div>
        </div>
    )
}
