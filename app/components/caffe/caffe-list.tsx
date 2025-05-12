import {CaffeItem} from "~/components/caffe/caffe-item";
import type {Cafe} from "~/cafes";

interface Props {
    caffe: Cafe[]
}

export default function CaffeList({caffe}: Props) {
    return (
        <div className="h-screen pb-24 overflow-y-auto px-8 pt-12">
            <div className="space-y-4">
                {caffe.map((cafe) => (
                    <CaffeItem key={cafe.id} cafe={cafe}/>
                ))}
            </div>
        </div>
    )
}
