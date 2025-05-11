import type {Route} from "./+types/search";
import {MainMaps} from "~/components/main-maps";
import CaffeList from "~/components/caffe/caffe-list";

export async function clientLoader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await res.json();
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function Search({loaderData}: Route.ComponentProps) {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    <CaffeList users={loaderData} />
                </div>
                <div className="col-span-3 h-screen">
                    <MainMaps />
                </div>
            </div>
        </div>
    )
}
