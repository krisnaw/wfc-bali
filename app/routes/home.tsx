import type {Route} from "./+types/home";
import CaffeList from "~/components/caffe-list";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <CaffeList/>
        </div>
    )
}
