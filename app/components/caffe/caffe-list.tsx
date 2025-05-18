import {CaffeItem} from "~/components/caffe/caffe-item";
import type {CafesModel} from "../../../database/schema";

interface Props {
    caffe: CafesModel[]
}

export default function CaffeList({caffe}: Props) {

    return (
        <div className="space-y-4">
            {caffe.map((cafe) => (
                <CaffeItem cafe={cafe} key={cafe.id} />
            ))}
        </div>
    )
}
