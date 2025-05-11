import type {Route} from "./+types/home";
import {MainMaps} from "~/components/main-maps";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <div className="h-screen">
            <MainMaps />
        </div>
    )
}
