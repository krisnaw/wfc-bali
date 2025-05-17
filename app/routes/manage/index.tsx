import type {Route} from "./+types/index";
import {db} from "../../../database/db";
import {cafes} from "../../../database/schema";
import CafesList from "~/components/caffe/cafes-list";
import {Link, redirect} from "react-router";
import {Button} from "~/components/ui/button";
import {eq} from "drizzle-orm";

export async function loader({request}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const param = url.searchParams.get("q");

    const shops = await db.select().from(cafes);
    return {cafes: shops, q: param};
}

export async function action({request} : Route.ActionArgs) {
    let formData = await request.formData();
    let cafe_id = formData.get("cafe_id") as string
    if (!cafe_id) return null;
    await db.delete(cafes).where(eq(cafes.id, parseInt(cafe_id)));
    return redirect("/manage")
}

export default function Index({loaderData}: Route.ComponentProps) {
    const {cafes, q} = loaderData;
    return (
        <div className="py-10">
            <div className="flex justify-end">
                <Button asChild>
                    <Link to="/manage/create">Add</Link>
                </Button>
                <Button variant="ghost">
                    <Link to="/manage/create-area">Add Area</Link>
                </Button>
            </div>
            <CafesList cafes={cafes}/>
        </div>
    )
}