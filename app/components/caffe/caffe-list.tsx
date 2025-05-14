import {CaffeItem} from "~/components/caffe/caffe-item";
import type {Cafe} from "~/cafes";

interface Props {
    caffe: Cafe[]
}

export default function CaffeList({caffe}: Props) {

    return (
        <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caffe.map((cafe) => (
                <CaffeItem cafe={cafe} key={cafe.id} />
            ))}
        </div>
    )
}
