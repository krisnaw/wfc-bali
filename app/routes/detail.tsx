import {Link} from "react-router";

export default function Detail() {
    return (
        <div className="h-screen">
            <div>
                <Link to={'/search/'} className="bg-blue-500 text-white p-4 m-2 rounded">Back</Link>
            </div>
            <div className="grid grid-cols-5">
                Detail page
            </div>
        </div>
    )
}
