import {CaffeItem} from "~/components/caffe/caffe-item";

interface User {
    completed: boolean
    id: number
    title: string
    userId: number
}

interface Props {
    users: User[]
}

export default function CaffeList({users}: Props) {
    return (
        <div className="h-screen pb-24 overflow-y-auto px-8 pt-12">
            <div className="space-y-4">
                {users.map((user) => (
                    <CaffeItem key={user.id} user={user}/>
                ))}
            </div>
        </div>
    )
}