import type {CafesModel} from "../../../database/schema";
import {Link} from "react-router";

interface Props {
    cafe: CafesModel
}
export function CaffeItem({cafe}: Props) {
    const date = new Date().toDateString()
    return (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80">
            <img alt={cafe.name} src={cafe.feature_image_url ?? ''} className="absolute inset-0 -z-10 size-full object-cover" />
            <div>
                <Link to={`/${cafe.id}`}>
                    {cafe.name}
                </Link>
            </div>
        </article>
    )
}
