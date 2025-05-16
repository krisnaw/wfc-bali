import type {CafesModel} from "../../../database/schema";
import {Link} from "react-router";

interface Props {
    cafe: CafesModel
}
export function CaffeItem({cafe}: Props) {
    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
            <img
                alt={cafe.name}
                src={cafe.feature_image_url ?? ''}
                className="aspect-3/4 w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
            />
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <Link to={`/${cafe.slug}`} viewTransition>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {cafe.name}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{cafe.description}</p>
            </div>
        </div>
    )
}
