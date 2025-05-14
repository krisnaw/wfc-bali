import {type Cafe, cafes} from "~/cafes";
import type {Route} from "./+types/home";
import {Button} from "~/components/ui/button";
import {NavLink, useSearchParams} from "react-router";
import CaffeList from "~/components/caffe/caffe-list";

export async function loader({request}: Route.LoaderArgs): Promise<{ items: Cafe[]; q: string | null; }> {
    const url = new URL(request.url);
    const param =  url.searchParams.get("q");
    return {items: cafes, q: param};
}

export default function Home({loaderData}: Route.ComponentProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const {items, q} = loaderData;
    const filteredItems = q
        ? items.filter((item) => item.area.toLowerCase().includes(q.toLowerCase()))
        : items;

    const areas = Array.from(new Set(cafes.map(cafe => cafe.area)));
    const selected = searchParams.get('q');

    const onClickHandler = (area: string) => {
        setSearchParams({q: area});
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Find the best place to work
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div>
                    <div className="mt-6 grid grid-cols-6 gap-4">
                        <Button variant="outline">
                            <NavLink to={'/'}>All</NavLink>
                        </Button>
                        {areas.map((area: string) => (
                            <Button variant={'outline'} key={area} onClick={() => onClickHandler(area)}>{area}</Button>
                        ))}
                    </div>
                </div>

                <div>
                    <CaffeList caffe={filteredItems} />
                </div>

            </div>
        </div>
    )
}
