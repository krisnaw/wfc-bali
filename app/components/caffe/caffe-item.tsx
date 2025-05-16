import type {CafesModel} from "../../../database/schema";
import {Link} from "react-router";

interface Props {
    cafe: CafesModel
}
export function CaffeItem({cafe}: Props) {
    const date = new Date().toDateString()
    return (
        <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <img alt={cafe.name} src={cafe.feature_image_url ?? ''}
                     className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-4/5 lg:aspect-4/5" />
            </div>
            <div className="mt-4">
                <div className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link to={`/${cafe.id}`}>
                        {cafe.name}
                    </Link>
                </div>

                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{cafe.description}</p>

            </div>
        </article>
    )
}
