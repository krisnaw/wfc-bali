import type {Route} from "./+types/home";
import CaffeList from "~/components/caffe-list";
import Nav from "~/components/nav";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <Nav/>
            <CaffeList/>
        </div>
    )
}
