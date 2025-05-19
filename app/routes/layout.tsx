import {Outlet} from "react-router";
import {BottomNav} from "~/components/bottom-nav";
import {db} from "../../database/db";
import {areas, type AreasModelWithCafes, cafes} from "../../database/schema";
import type {Route} from "./+types/layout";
import {AreasFilter} from "~/components/areas-filter";
import {asc, count, eq} from "drizzle-orm";

export async function loader({params} : Route.LoaderArgs) {
    // @ts-ignore
    const locations: AreasModelWithCafes[] = await db.select({...areas, cafes: count(cafes.id)})
        .from(areas)
        .leftJoin(cafes, eq(cafes.area_id, areas.id))
        .groupBy(areas.id)
        .orderBy(asc(areas.name))

    return {areas: locations, selectedArea: params.name};
}


export default function Layout({loaderData}: Route.ComponentProps) {
    const {areas, selectedArea} = loaderData;

    return (
        <div className="mx-auto max-w-lg">
            <div className="fixed top-0 z-50 w-full left-0 bg-white shadow">
                <div className="h-full max-w-lg mx-auto font-medium pb-4">
                    <AreasFilter areas={areas} setArea={selectedArea ?? null} />
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-28 relative">
                <Outlet/>
            </div>
            <BottomNav />
        </div>
    )
}
