import type {Route} from "./+types/home";
import {MainMaps} from "~/components/main-maps";
import ShopList from "~/components/shop/shop-list";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    <ShopList />
                </div>
                <div className="h-screen col-span-3">
                    <MainMaps />
                </div>
            </div>

        </div>
    )
}
