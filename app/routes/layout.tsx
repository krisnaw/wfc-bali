import {Outlet} from "react-router";
import {BottomNav} from "~/components/bottom-nav";
import {db} from "../../database/db";
import {areas} from "../../database/schema";
import type {Route} from "./+types/layout";
import {AreasFilter} from "~/components/areas-filter";

export async function loader() {
    const locations = await db.select().from(areas);
    return {areas: locations};
}


export default function Layout({loaderData}: Route.ComponentProps) {
    const {areas} = loaderData;
    console.log(areas);

    return (
        <div className="mx-auto max-w-lg">
            <div className="fixed top-0 z-50 w-full left-0 bg-white shadow">
                <div className="h-full max-w-lg mx-auto font-medium pb-4">
                    <AreasFilter areas={areas}/>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-28 relative">
                <Outlet/>
            </div>
            <BottomNav />
        </div>
    )
}
