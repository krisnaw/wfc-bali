import type {Route} from "./+types/home";
import {db} from "../../database/db";
import {cafes} from "../../database/schema";

export async function loader({request}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const param =  url.searchParams.get("q");

    const shops = await db.select().from(cafes);
    return {cafes: shops, q: param};
}

export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {cafes, q} = loaderData;

    // const [searchParams, setSearchParams] = useSearchParams();
    // const filteredItems = q
    //     ? items.filter((item) => item.area.toLowerCase().includes(q.toLowerCase()))
    //     : items;

    // const areas = Array.from(new Set(cafes.map(cafe => cafe.area)));
    // const selected = searchParams.get('q');
    //
    // const onClickHandler = (area: string) => {
    //     setSearchParams({q: area});
    // }

    return (
        <div className="bg-white py-24 sm:py-32">


            {cafes.map((cafe) => (
                <div>{cafe.name}</div>
            ))}

            {/*<div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
            {/*    <div className="mx-auto max-w-2xl text-center">*/}
            {/*        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">*/}
            {/*            Find the best place to work*/}
            {/*        </h2>*/}
            {/*        <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className="mt-6 grid grid-cols-6 gap-4">*/}
            {/*            <Button variant="outline">*/}
            {/*                <NavLink to={'/'}>All</NavLink>*/}
            {/*            </Button>*/}
            {/*            {areas.map((area: string) => (*/}
            {/*                <Button variant={'outline'} key={area} onClick={() => onClickHandler(area)}>{area}</Button>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <CaffeList caffe={filteredItems} />*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    )
}
