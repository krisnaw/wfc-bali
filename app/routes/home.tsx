import type {Route} from "./+types/home";
import {MainMaps} from "~/components/main-maps";
import ShopList from "~/components/shop/shop-list";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function clientLoader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await res.json()
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function Home({loaderData}: Route.ComponentProps) {
    console.log(loaderData)
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-2  flex flex-col px-4 py-6">
                    <ShopList users={loaderData} />
                </div>
                <div className="h-screen col-span-3">
                    <MainMaps />
                </div>
            </div>

        </div>
    )
}
