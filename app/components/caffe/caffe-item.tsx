import {Link} from "react-router";
import type {Cafe} from "~/cafes";

interface Props {
    cafe: Cafe
}
export function CaffeItem({cafe}: Props) {
    return (
        <div className="flex">
            <div className="mr-4 shrink-0">
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 200 200"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="size-16 border border-gray-200 text-gray-300"
                >
                    <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                </svg>
            </div>
            <div>
                <h4 className="text-lg font-bold text-gray-500">
                    <Link to="/caffe-detail" className="text-gray-900 hover:text-gray-700">
                        {cafe.name}
                    </Link>
                </h4>
                <p className="mt-1 text-gray-500">
                    Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                    quidem ipsam quia iusto.
                </p>
            </div>
        </div>
    )
}
