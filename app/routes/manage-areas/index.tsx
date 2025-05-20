import {getAreas} from "../../../database/query";
import {useLoaderData} from "react-router";

export async function loader() {
    const area = await getAreas()
    return {areas: area};
}

export default function IndexAreas() {
    let areas = useLoaderData<typeof loader>();
    console.log(areas)
    return (
        <div>
            Hello
        </div>
    )
}