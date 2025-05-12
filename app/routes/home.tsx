import {type Cafe, cafes} from "~/cafes";
import {Form, useSubmit} from "react-router";
import CaffeItemVer from "~/components/caffe/caffe-item-ver";
import type {Route} from "./+types/home";
import {Input} from "~/components/ui/input";

export async function loader({request}: Route.LoaderArgs): Promise<{ items: Cafe[]; q: string | null; }> {
    const url = new URL(request.url);
    const param =  url.searchParams.get("q");
    return {items: cafes, q: param};
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {items, q} = loaderData;
    const submit = useSubmit();
    return (
        <div>

            <div>
                <Form
                    onChange={(event) =>
                        submit(event.currentTarget)
                    }
                    id="search-form" role="search">
                    <Input
                        aria-label="Search contacts"
                        defaultValue={q || ''}
                        id="q"
                        name="q"
                        placeholder="Search"
                        type="search"

                    />
                    {/* existing elements */}
                </Form>
            </div>

            <CaffeItemVer caffe={items as Cafe[]} />
        </div>
    )
}
